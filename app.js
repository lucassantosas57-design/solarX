// Motor Lógico da Plataforma solarX ODS 4 - EduLingo

// Estado Global da Aplicação
const state = {
  xp: 0,
  lives: 5,
  streak: 1,
  level: 1,
  progress: {
    matematica: { lessons: [], videos: [] },
    portugues: { lessons: [], videos: [] },
    ciencias: { lessons: [], videos: [] },
    historia: { lessons: [], videos: [] },
    geografia: { lessons: [], videos: [] }
  },
  name: "Estudante solarX",
  avatar: "👦",
  theme: "light",
  lastStudyDate: null,
  isLoggedIn: false,
  
  // Variáveis de sessão (estado volátil)
  currentView: "dashboard",
  activeSubjectKey: null,
  activeLesson: null,
  activeVideo: null,
  currentQuestionIdx: 0,
  selectedOption: null,
  hasAnswered: false,
  isCorrect: false,
  
  // Placar de Líderes
  leaderboard: [
    { name: "Sophia M.", avatar: "👧", xp: 180, isPlayer: false },
    { name: "Mateus Silva", avatar: "🚀", xp: 150, isPlayer: false },
    { name: "Gabi Costa", avatar: "🎨", xp: 120, isPlayer: false },
    { name: "Lucas Melo", avatar: "🦁", xp: 90, isPlayer: false },
    { name: "Estudante solarX", avatar: "👦", xp: 0, isPlayer: true },
    { name: "Beatriz N.", avatar: "🦄", xp: 40, isPlayer: false }
  ]
};

// --- AUDIO SYNTHESIS ENGINE (Web Audio API) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  // Garantir que o contexto de áudio está ativo (browsers bloqueiam autoplay)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'click') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } 
  else if (type === 'correct') {
    // Tom alegre arpejado (C5 -> E5 -> G5)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.15, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } 
  else if (type === 'incorrect') {
    // Zumbido descendente (retro buzz)
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.3);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  }
  else if (type === 'victory') {
    // Fanfarra alegre de conclusão
    osc.type = 'sine';
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
    });
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.15, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
    osc.start(now);
    osc.stop(now + 0.8);
  }
  else if (type === 'gameover') {
    // Efeito triste de derrota
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(150, now + 0.5);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
    osc.start(now);
    osc.stop(now + 0.55);
  }
}

// --- STATE PERSISTENCE ---
function loadState() {
  const saved = localStorage.getItem('solarX_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Mesclar propriedades para evitar quebras se o schema mudar
      state.xp = parsed.xp || 0;
      state.lives = typeof parsed.lives === 'number' ? parsed.lives : 5;
      state.streak = parsed.streak || 1;
      state.level = parsed.level || 1;
      if (parsed.progress) state.progress = parsed.progress;
      state.name = parsed.name || "Estudante solarX";
      state.avatar = parsed.avatar || "👦";
      state.theme = parsed.theme || "light";
      state.lastStudyDate = parsed.lastStudyDate || null;
      state.isLoggedIn = parsed.isLoggedIn || false;
    } catch (e) {
      console.error("Erro ao carregar o estado salvo, reiniciando.", e);
    }
  }
  
  // Atualizar ofensiva se aplicável
  checkStreak();
  
  // Sincronizar tema visual
  document.documentElement.setAttribute('data-theme', state.theme);
  
  // Sincronizar no placar
  const playerOnLeaderboard = state.leaderboard.find(u => u.isPlayer);
  if (playerOnLeaderboard) {
    playerOnLeaderboard.name = state.name;
    playerOnLeaderboard.avatar = state.avatar;
    playerOnLeaderboard.xp = state.xp;
  }
  
  updateTopStatusBar();
}

function saveState() {
  // Sincronizar placar de líderes antes de salvar
  const playerOnLeaderboard = state.leaderboard.find(u => u.isPlayer);
  if (playerOnLeaderboard) {
    playerOnLeaderboard.xp = state.xp;
    playerOnLeaderboard.name = state.name;
    playerOnLeaderboard.avatar = state.avatar;
  }
  
  // Ordenar o placar
  state.leaderboard.sort((a, b) => b.xp - a.xp);
  
  localStorage.setItem('solarX_state', JSON.stringify({
    xp: state.xp,
    lives: state.lives,
    streak: state.streak,
    level: state.level,
    progress: state.progress,
    name: state.name,
    avatar: state.avatar,
    theme: state.theme,
    lastStudyDate: state.lastStudyDate,
    isLoggedIn: state.isLoggedIn
  }));
}

function checkStreak() {
  if (!state.lastStudyDate) return;
  
  const today = new Date().toDateString();
  const lastDate = new Date(state.lastStudyDate).toDateString();
  
  if (today === lastDate) return; // Já estudou hoje
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toDateString();
  
  if (lastDate === yesterdayString) {
    // Estudou ontem, streak mantido (será incrementado ao ganhar XP hoje)
  } else {
    // Quebrou a ofensiva
    state.streak = 1;
  }
}

function recordStudyActivity() {
  const today = new Date();
  const todayString = today.toDateString();
  
  if (state.lastStudyDate) {
    const lastDateString = new Date(state.lastStudyDate).toDateString();
    if (lastDateString !== todayString) {
      // Primeiro estudo do dia: incrementa ofensiva
      state.streak += 1;
    }
  } else {
    state.streak = 1;
  }
  
  state.lastStudyDate = today.toISOString();
  saveState();
}

// --- LEVELING LOGIC ---
function addXP(amount) {
  state.xp += amount;
  
  // Fórmula simples de nível: Nível = 1 + flor(XP / 100)
  const newLevel = Math.floor(state.xp / 100) + 1;
  if (newLevel > state.level) {
    state.level = newLevel;
    setTimeout(() => {
      playSound('victory');
      alert(`🎉 Parabéns! Você subiu de nível! Agora você é Nível ${state.level}! ⭐`);
    }, 500);
  }
  
  recordStudyActivity();
  updateTopStatusBar();
  saveState();
}

// --- VIEW ROUTING SYSTEM ---
const views = ["landing", "dashboard", "subject", "quiz", "video", "leaderboard", "profile"];

function switchView(viewName) {
  playSound('click');
  state.currentView = viewName;
  
  if (viewName === "landing") {
    document.body.classList.add("logged-out");
  } else {
    document.body.classList.remove("logged-out");
  }
  
  // Esconder todas as telas
  views.forEach(v => {
    const element = document.getElementById(`view-${v}`);
    if (element) {
      element.style.display = "none";
    }
  });
  
  // Mostrar tela ativa
  const activeViewEl = document.getElementById(`view-${viewName}`);
  if (activeViewEl) {
    activeViewEl.style.display = viewName === "dashboard" || viewName === "profile" ? "block" : "block";
  }
  
  // Mostrar/Esconder a barra superior (não mostramos no Quiz para foco)
  const topBar = document.getElementById("top-status-bar");
  if (viewName === "quiz" || viewName === "landing") {
    topBar.style.display = "none";
  } else {
    topBar.style.display = "flex";
  }
  
  // Atualizar itens de navegação ativos na sidebar
  document.querySelectorAll(".sidebar .nav-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-view") === viewName) {
      item.classList.add("active");
    }
  });
  
  // Renderizar o conteúdo correspondente
  if (viewName === "dashboard") {
    renderDashboard();
  } else if (viewName === "leaderboard") {
    renderLeaderboard();
  } else if (viewName === "profile") {
    renderProfile();
  }
  
  window.scrollTo(0, 0);
}

// --- UI UPDATES ---
function updateTopStatusBar() {
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-lives").textContent = state.lives;
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-level").textContent = state.level;
}

// --- RENDER DASHBOARD (Home Screen) ---
function renderDashboard() {
  const container = document.getElementById("subjects-grid-container");
  container.innerHTML = "";
  
  Object.keys(subjectsData).forEach(key => {
    const subject = subjectsData[key];
    
    // Calcular progresso
    const totalLessons = subject.lessons.length;
    const totalVideos = subject.videos.length;
    const totalActivities = totalLessons + totalVideos;
    
    const completedLessons = state.progress[key]?.lessons?.length || 0;
    const watchedVideos = state.progress[key]?.videos?.length || 0;
    const completedActivities = completedLessons + watchedVideos;
    
    const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;
    
    const card = document.createElement("div");
    card.className = "subject-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Estudar ${subject.name}, progresso ${progressPercent} por cento`);
    card.style.borderColor = `rgba(0, 0, 0, 0.05)`;
    
    card.innerHTML = `
      <div class="subject-header">
        <div class="subject-icon-box" style="background-color: ${subject.color};">
          ${subject.icon}
        </div>
        <h3 class="subject-name">${subject.name}</h3>
      </div>
      <p class="subject-tagline">${subject.tagline}</p>
      <div class="subject-progress-container">
        <div class="progress-label-row">
          <span>Progresso</span>
          <span>${progressPercent}%</span>
        </div>
        <div class="progress-bar-outer">
          <div class="progress-bar-inner" style="width: ${progressPercent}%; background-color: ${subject.color};"></div>
        </div>
      </div>
    `;
    
    card.addEventListener("click", () => loadSubject(key));
    card.addEventListener("keypress", (e) => { if (e.key === 'Enter') loadSubject(key); });
    container.appendChild(card);
  });
}

// --- RENDER SUBJECT DETAILS SCREEN ---
function loadSubject(subjectKey) {
  state.activeSubjectKey = subjectKey;
  switchView("subject");
  
  const subject = subjectsData[subjectKey];
  const container = document.getElementById("subject-details-content");
  
  // Criar HTML para Banner
  let bannerHTML = `
    <div class="subject-banner" style="background: linear-gradient(135deg, ${subject.color}, ${subject.color}cc);">
      <div class="subject-banner-content">
        <h2 class="subject-banner-title">${subject.name}</h2>
        <p class="subject-banner-desc">${subject.tagline}</p>
      </div>
      <div class="subject-banner-decor">${subject.name.substring(0, 1)}</div>
    </div>
  `;
  
  // Criar HTML para Módulos de Exercícios
  let lessonsHTML = `<div class="module-section">
    <h3 class="section-title">✏️ Exercícios Interativos</h3>
    <div class="lessons-list">`;
    
  subject.lessons.forEach(lesson => {
    const isCompleted = state.progress[subjectKey]?.lessons?.includes(lesson.id);
    const badgeHTML = isCompleted ? `<span class="xp-badge" style="background-color: rgba(88, 204, 2, 0.1); color: var(--color-green-light)">✓ Concluído</span>` : `<span class="xp-badge">⚡ +${lesson.xp} XP</span>`;
    const btnText = isCompleted ? "Praticar de novo" : "Iniciar Aula";
    const btnClass = isCompleted ? "btn-neutral" : "btn-primary";
    
    lessonsHTML += `
      <div class="lesson-card">
        <h4 class="card-title">${lesson.title}</h4>
        <p class="card-desc">Exercite sua mente com desafios práticos com feedback imediato!</p>
        <div class="card-footer">
          ${badgeHTML}
          <button class="btn-tactile ${btnClass}" onclick="startQuiz('${lesson.id}')">${btnText}</button>
        </div>
      </div>
    `;
  });
  
  lessonsHTML += `</div></div>`;
  
  // Criar HTML para Videoaulas
  let videosHTML = `<div class="module-section">
    <h3 class="section-title">📺 Videoaulas Inteligentes</h3>
    <div class="videos-list">`;
    
  subject.videos.forEach(video => {
    const isWatched = state.progress[subjectKey]?.videos?.includes(video.id);
    const badgeHTML = isWatched ? `<span class="xp-badge" style="background-color: rgba(88, 204, 2, 0.1); color: var(--color-green-light)">✓ Assistido</span>` : `<span class="xp-badge">⚡ +${video.xp} XP</span>`;
    const btnText = isWatched ? "Assistir Novamente" : "Assistir Vídeo";
    const btnClass = isWatched ? "btn-neutral" : "btn-secondary";
    
    videosHTML += `
      <div class="video-card">
        <h4 class="card-title">${video.title}</h4>
        <p class="card-desc">${video.description}</p>
        <div class="card-footer">
          <div style="display: flex; gap: 8px;">
            ${badgeHTML}
            <span class="xp-badge" style="background-color: rgba(0,0,0,0.05); color: var(--text-secondary)">⏱️ ${video.duration}</span>
          </div>
          <button class="btn-tactile ${btnClass}" onclick="startVideo('${video.id}')">${btnText}</button>
        </div>
      </div>
    `;
  });
  
  videosHTML += `</div></div>`;
  
  container.innerHTML = bannerHTML + lessonsHTML + videosHTML;
}

// --- INTERACTIVE QUIZ ENGINE ---
function startQuiz(lessonId) {
  const subject = subjectsData[state.activeSubjectKey];
  const lesson = subject.lessons.find(l => l.id === lessonId);
  
  if (!lesson) return;
  
  // Bloquear se o usuário não tiver vidas
  if (state.lives <= 0) {
    alert("Você está sem corações (❤️ 0)! Assista a uma videoaula para recuperar suas vidas antes de fazer quizzes!");
    // Oferecer atalho para videoaulas
    if (subject.videos.length > 0) {
      startVideo(subject.videos[0].id);
    }
    return;
  }
  
  state.activeLesson = lesson;
  state.currentQuestionIdx = 0;
  state.selectedOption = null;
  state.hasAnswered = false;
  
  switchView("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const lesson = state.activeLesson;
  const question = lesson.questions[state.currentQuestionIdx];
  const progressPercent = (state.currentQuestionIdx / lesson.questions.length) * 100;
  
  // Atualizar barra de progresso do quiz
  document.getElementById("quiz-progress-bar").style.width = `${progressPercent}%`;
  
  const questionBox = document.getElementById("quiz-question-box");
  questionBox.classList.remove("shake-animation"); // Limpar tremores anteriores
  
  // Renderizar a questão dependendo do tipo
  let optionsHTML = "";
  question.options.forEach((opt, idx) => {
    const letters = ["A", "B", "C", "D", "E"];
    optionsHTML += `
      <button class="option-card" onclick="selectQuizOption('${opt}')" id="opt-card-${idx}">
        <span class="option-index">${letters[idx]}</span>
        <span>${escapeHTML(opt)}</span>
      </button>
    `;
  });
  
  questionBox.innerHTML = `
    <h3 class="quiz-question">${escapeHTML(question.question)}</h3>
    <div class="quiz-options">
      ${optionsHTML}
    </div>
  `;
  
  // Resetar estado do botão de submissão
  const submitBtn = document.getElementById("quiz-submit-btn");
  submitBtn.className = "btn-tactile btn-disabled";
  submitBtn.textContent = "Verificar Resposta";
  submitBtn.disabled = true;
  
  // Garantir que a barra de feedback está recolhida
  document.getElementById("quiz-feedback-bar").classList.remove("active");
}

function selectQuizOption(optionText) {
  if (state.hasAnswered) return;
  
  playSound('click');
  state.selectedOption = optionText;
  
  // Atualizar classes visuais nas opções
  const lesson = state.activeLesson;
  const question = lesson.questions[state.currentQuestionIdx];
  
  question.options.forEach((opt, idx) => {
    const card = document.getElementById(`opt-card-${idx}`);
    if (opt === optionText) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });
  
  // Ativar botão de Verificar
  const submitBtn = document.getElementById("quiz-submit-btn");
  submitBtn.className = "btn-tactile btn-primary";
  submitBtn.disabled = false;
}

function checkQuizAnswer() {
  if (state.hasAnswered) {
    // Se já respondeu, clicar no botão serve para CONTINUAR
    advanceQuiz();
    return;
  }
  
  state.hasAnswered = true;
  const lesson = state.activeLesson;
  const question = lesson.questions[state.currentQuestionIdx];
  const isCorrect = state.selectedOption === question.answer;
  state.isCorrect = isCorrect;
  
  const feedbackBar = document.getElementById("quiz-feedback-bar");
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackDesc = document.getElementById("feedback-desc");
  
  // Desabilitar todas as opções
  question.options.forEach((opt, idx) => {
    document.getElementById(`opt-card-${idx}`).disabled = true;
  });
  
  if (isCorrect) {
    playSound('correct');
    feedbackBar.className = "quiz-feedback-bar active correct";
    feedbackIcon.innerHTML = "✓";
    feedbackTitle.textContent = "Excelente Trabalho! 🌟";
    feedbackDesc.textContent = question.explanation;
  } else {
    playSound('incorrect');
    feedbackBar.className = "quiz-feedback-bar active incorrect";
    feedbackIcon.innerHTML = "✗";
    feedbackTitle.textContent = "Oops, não foi dessa vez!";
    feedbackDesc.textContent = `A resposta certa é "${question.answer}". ${question.explanation}`;
    
    // Tremer a caixa de perguntas
    document.getElementById("quiz-question-box").classList.add("shake-animation");
    
    // Decrementar vida
    state.lives -= 1;
    if (state.lives < 0) state.lives = 0;
    updateTopStatusBar();
    saveState();
  }
  
  // Alterar botão principal de submissão
  const submitBtn = document.getElementById("quiz-submit-btn");
  submitBtn.textContent = "Continuar";
  submitBtn.className = "btn-tactile btn-primary";
}

function advanceQuiz() {
  // Ocultar barra de feedback
  document.getElementById("quiz-feedback-bar").classList.remove("active");
  state.hasAnswered = false;
  
  if (state.lives <= 0) {
    // Game Over
    playSound('gameover');
    alert("💀 Suas vidas acabaram! Mas não desanime, assista a uma videoaula para recarregar suas vidas (❤️ 5) e tente novamente!");
    switchView("subject");
    loadSubject(state.activeSubjectKey);
    return;
  }
  
  state.currentQuestionIdx += 1;
  const lesson = state.activeLesson;
  
  if (state.currentQuestionIdx >= lesson.questions.length) {
    // Concluiu com sucesso!
    playSound('victory');
    document.getElementById("quiz-progress-bar").style.width = "100%";
    
    // Salvar progresso
    if (!state.progress[state.activeSubjectKey].lessons.includes(lesson.id)) {
      state.progress[state.activeSubjectKey].lessons.push(lesson.id);
    }
    
    // Adicionar XP
    const earnedXP = lesson.xp;
    
    // Trigger confetti
    triggerConfetti();
    
    setTimeout(() => {
      alert(`🎉 Parabéns! Você concluiu a lição "${lesson.title}" e ganhou +${earnedXP} XP! ⚡`);
      addXP(earnedXP);
      switchView("subject");
      loadSubject(state.activeSubjectKey);
    }, 400);
  } else {
    // Próxima pergunta
    renderQuizQuestion();
  }
}

// --- VIDEO LESSON PLAYER PORTAL ---
let ytPlayer = null;
let ytProgressInterval = null;

// Função chamada pela API do YouTube
window.onYouTubeIframeAPIReady = function() {
  console.log("YouTube Player API Pronta.");
};

// Carregar script do YouTube dinamicamente
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function startVideo(videoId) {
  const subject = subjectsData[state.activeSubjectKey];
  const video = subject.videos.find(v => v.id === videoId);
  
  if (!video) return;
  
  state.activeVideo = video;
  switchView("video");
  
  const container = document.getElementById("video-player-content");
  
  container.innerHTML = `
    <div class="video-player-wrapper">
      <div id="yt-player-placeholder"></div>
    </div>
    <div class="video-info-box">
      <div class="video-tracker-badge" id="video-status-tracker">
        <span>🎬 Videoaula Iniciada</span>
        <span>• Assista para recarregar vidas e ganhar XP</span>
      </div>
      <h2 style="font-size:26px;">${video.title}</h2>
      <p style="color:var(--text-secondary); margin-bottom:12px;">Matéria: <strong>${subject.name}</strong> • Recompensa: <strong>⚡ ${video.xp} XP</strong> e <strong>❤️ Vidas Recarregadas</strong></p>
      <p style="font-size:16px; line-height:1.6;">${video.description}</p>
    </div>
  `;
  
  // Inicializar player do YouTube
  setTimeout(() => {
    try {
      ytPlayer = new YT.Player('yt-player-placeholder', {
        height: '100%',
        width: '100%',
        videoId: video.youtubeId,
        playerVars: {
          'playsinline': 1,
          'rel': 0,
          'modestbranding': 1,
          'origin': window.location.origin
        },
        events: {
          'onStateChange': onYTPlayerStateChange,
          'onError': onYTPlayerError
        }
      });
    } catch (err) {
      console.error("Erro ao carregar o player do YouTube:", err);
      // Fallback em caso de bloqueio ou sem internet
      setupVideoFallback();
    }
  }, 100);
}

function onYTPlayerError(e) {
  console.warn("Erro no Iframe do YouTube. Usando fallback de visualização.", e);
  setupVideoFallback();
}

function setupVideoFallback() {
  const tracker = document.getElementById("video-status-tracker");
  if (tracker) {
    tracker.innerHTML = `<span>⚠️ Erro ao conectar ao YouTube.</span>`;
  }
  
  const container = document.getElementById("video-player-content");
  // Adicionar um botão alternativo para ganhar o prêmio sem o player
  const fallbackBox = document.createElement("div");
  fallbackBox.style.marginTop = "20px";
  fallbackBox.style.padding = "20px";
  fallbackBox.style.borderRadius = "16px";
  fallbackBox.style.border = "2px dashed var(--color-orange-light)";
  fallbackBox.style.textAlign = "center";
  fallbackBox.innerHTML = `
    <p style="margin-bottom:16px;">O reprodutor do YouTube não pôde carregar. Mas não se preocupe! Clique abaixo para simular que assistiu à aula e receber suas recompensas.</p>
    <button class="btn-tactile btn-primary" onclick="rewardVideoWatching()">Simular Conclusão da Aula</button>
  `;
  container.appendChild(fallbackBox);
}

function onYTPlayerStateChange(event) {
  const tracker = document.getElementById("video-status-tracker");
  
  if (event.data === YT.PlayerState.PLAYING) {
    tracker.className = "video-tracker-badge";
    tracker.style.backgroundColor = "rgba(28, 176, 246, 0.15)";
    tracker.innerHTML = `<span>⏳ Assistindo... Vidas serão recarregadas ao concluir!</span>`;
    
    // Iniciar temporizador para conceder XP e vidas se assistir 15 segundos
    // (Assim as crianças não precisam ver o vídeo de 10 min inteiro se já souberem, mas incentiva a assistir!)
    if (!ytProgressInterval) {
      let secondsWatched = 0;
      ytProgressInterval = setInterval(() => {
        secondsWatched += 1;
        if (secondsWatched >= 15) {
          clearInterval(ytProgressInterval);
          ytProgressInterval = null;
          rewardVideoWatching();
        } else {
          tracker.innerHTML = `<span>⏳ Estudando... Falta pouco! (${15 - secondsWatched}s)</span>`;
        }
      }, 1000);
    }
  } 
  else if (event.data === YT.PlayerState.PAUSED) {
    tracker.innerHTML = `<span>⏸️ Vídeo Pausado</span>`;
    if (ytProgressInterval) {
      clearInterval(ytProgressInterval);
      ytProgressInterval = null;
    }
  }
  else if (event.data === YT.PlayerState.ENDED) {
    // Ao terminar o vídeo por completo, sempre recompensa
    rewardVideoWatching();
  }
}

function rewardVideoWatching() {
  if (ytProgressInterval) {
    clearInterval(ytProgressInterval);
    ytProgressInterval = null;
  }

  const subjectKey = state.activeSubjectKey;
  const video = state.activeVideo;
  
  if (!video) return;
  
  // Garantir que recompensa apenas uma vez por sessão de player
  state.activeVideo = null;
  
  // Registrar visualização no progresso
  if (!state.progress[subjectKey].videos.includes(video.id)) {
    state.progress[subjectKey].videos.push(video.id);
  }
  
  // Recarregar vidas para o máximo (5)
  const hadFullLives = state.lives === 5;
  state.lives = 5;
  
  playSound('victory');
  triggerConfetti();
  
  // Atualizar visualizador de rastreamento se ainda existir
  const tracker = document.getElementById("video-status-tracker");
  if (tracker) {
    tracker.style.backgroundColor = "rgba(88, 204, 2, 0.15)";
    tracker.style.color = "var(--color-green-light)";
    tracker.style.borderColor = "rgba(88, 204, 2, 0.3)";
    tracker.innerHTML = `<span>🎉 Concluído! +${video.xp} XP ganho e vidas recarregadas! ❤️</span>`;
  }
  
  setTimeout(() => {
    alert(`📺 Excelente! Você assistiu à videoaula "${video.title}":\n⚡ Ganhou +${video.xp} XP!\n❤️ Suas vidas foram recarregadas para 5!`);
    addXP(video.xp);
    switchView("subject");
    loadSubject(subjectKey);
  }, 300);
}

// --- RENDER LEADERBOARD ---
function renderLeaderboard() {
  const container = document.getElementById("leaderboard-list-container");
  container.innerHTML = "";
  
  // Sincronizar dados do jogador ativo no array do placar
  const player = state.leaderboard.find(u => u.isPlayer);
  if (player) {
    player.xp = state.xp;
    player.avatar = state.avatar;
    player.name = state.name;
  }
  
  // Ordenar o placar
  state.leaderboard.sort((a, b) => b.xp - a.xp);
  
  state.leaderboard.forEach((user, idx) => {
    const rank = idx + 1;
    let rankClass = "";
    if (rank === 1) rankClass = "rank-gold";
    else if (rank === 2) rankClass = "rank-silver";
    else if (rank === 3) rankClass = "rank-bronze";
    
    const item = document.createElement("div");
    item.className = `leaderboard-item ${user.isPlayer ? 'me' : ''}`;
    
    item.innerHTML = `
      <div class="rank-number ${rankClass}">${rank}</div>
      <div class="leaderboard-avatar">${user.avatar}</div>
      <div class="leaderboard-name">${escapeHTML(user.name)} ${user.isPlayer ? '(Você)' : ''}</div>
      <div class="leaderboard-xp">${user.xp} XP</div>
    `;
    
    container.appendChild(item);
  });
}

// --- RENDER PROFILE & ACHIEVEMENTS ---
const badgeDefinitions = [
  { id: "badge_first", title: "Primeiros Passos", desc: "Conclua sua primeira aula ou assista a um vídeo.", icon: "🌱" },
  { id: "badge_math", title: "Matemático Nato", desc: "Conclua uma lição de Matemática.", icon: "🧮" },
  { id: "badge_science", title: "Cientista Cósmico", desc: "Conclua uma lição de Ciências.", icon: "🚀" },
  { id: "badge_streak", title: "Fogo no Coração", desc: "Estude por pelo menos 2 dias seguidos (Ofensiva).", icon: "🔥" },
  { id: "badge_century", title: "Super Cérebro", desc: "Alcance a marca de 100 XP na plataforma.", icon: "🧠" }
];

function renderProfile() {
  document.getElementById("profile-avatar").textContent = state.avatar;
  document.getElementById("profile-name-display").textContent = state.name;
  document.getElementById("profile-stat-xp").textContent = state.xp;
  document.getElementById("profile-stat-streak").textContent = state.streak;
  
  // Renderizar Conquistas
  const container = document.getElementById("badges-grid-container");
  container.innerHTML = "";
  
  // Checar condições de desbloqueio
  const unlockedBadges = [];
  
  const hasFinishedAnyLesson = Object.keys(state.progress).some(k => state.progress[k].lessons.length > 0);
  const hasWatchedAnyVideo = Object.keys(state.progress).some(k => state.progress[k].videos.length > 0);
  
  if (hasFinishedAnyLesson || hasWatchedAnyVideo) {
    unlockedBadges.push("badge_first");
  }
  if (state.progress.matematica.lessons.length > 0) {
    unlockedBadges.push("badge_math");
  }
  if (state.progress.ciencias.lessons.length > 0) {
    unlockedBadges.push("badge_science");
  }
  if (state.streak >= 2) {
    unlockedBadges.push("badge_streak");
  }
  if (state.xp >= 100) {
    unlockedBadges.push("badge_century");
  }
  
  badgeDefinitions.forEach(badge => {
    const isUnlocked = unlockedBadges.includes(badge.id);
    const badgeEl = document.createElement("div");
    badgeEl.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
    
    badgeEl.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-title">${badge.title}</div>
      <div class="badge-desc">${badge.desc}</div>
    `;
    
    container.appendChild(badgeEl);
  });
}

// Mudar Avatar
const avatarsList = ["👦", "👧", "🦁", "🐼", "🦄", "🚀", "🎨", "🧪", "🐱", "🦊", "🦖"];
document.getElementById("change-avatar-btn").addEventListener("click", () => {
  playSound('click');
  const currentIdx = avatarsList.indexOf(state.avatar);
  const nextIdx = (currentIdx + 1) % avatarsList.length;
  state.avatar = avatarsList[nextIdx];
  document.getElementById("profile-avatar").textContent = state.avatar;
  saveState();
});

// Alterar Nome de Estudante
document.getElementById("profile-name-display").addEventListener("click", () => {
  playSound('click');
  const newName = prompt("Como você quer se chamar na plataforma?", state.name);
  if (newName && newName.trim().length > 0) {
    state.name = newName.trim().substring(0, 20);
    document.getElementById("profile-name-display").textContent = state.name;
    saveState();
  }
});

// --- CONFETTI ANIMATION EFFECT ---
function triggerConfetti() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#58cc02', '#1cb0f6', '#ff9600', '#ff4b4b', '#ffd32a'];

  const mainArea = document.getElementById("main-content-area");

  const interval = setInterval(() => {
    if (Date.now() > animationEnd) {
      return clearInterval(interval);
    }

    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    confetti.style.left = `${Math.random() * 95}%`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `scale(${Math.random() * 0.5 + 0.6})`;
    confetti.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`;
    
    mainArea.appendChild(confetti);
    
    // Deletar do DOM depois do término da animação
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }, 60);
}

// --- UTILITIES ---
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Configurar listeners de navegação lateral
  document.querySelectorAll(".sidebar .nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const view = item.getAttribute("data-view");
      switchView(view);
    });
  });
  
  // Tema escuro toggle
  document.getElementById("theme-toggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', state.theme);
    
    const themeText = document.querySelector("#theme-toggle span");
    themeText.textContent = state.theme === "light" ? "Modo Escuro" : "Modo Claro";
    
    playSound('click');
    saveState();
  });
  
  // Botões de voltar
  document.getElementById("subject-back-btn").addEventListener("click", () => {
    switchView("dashboard");
  });
  
  document.getElementById("video-back-btn").addEventListener("click", () => {
    if (ytProgressInterval) {
      clearInterval(ytProgressInterval);
      ytProgressInterval = null;
    }
    switchView("subject");
    loadSubject(state.activeSubjectKey);
  });
  
  document.getElementById("quiz-close-btn").addEventListener("click", () => {
    if (confirm("Você quer mesmo sair? Todo o progresso desta lição será perdido.")) {
      switchView("subject");
      loadSubject(state.activeSubjectKey);
    }
  });
  
  // Botões do Quiz
  document.getElementById("quiz-submit-btn").addEventListener("click", checkQuizAnswer);
  document.getElementById("feedback-continue-btn").addEventListener("click", advanceQuiz);
  
  // Botões de Landing Page e Auth
  const btnVamosEstudar = document.getElementById("btn-vamos-estudar");
  if (btnVamosEstudar) {
    btnVamosEstudar.addEventListener("click", () => {
      playSound('click');
      state.isLoggedIn = true;
      saveState();
      switchView("dashboard");
    });
  }
  
  const btnLogin = document.getElementById("btn-login");
  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      playSound('click');
      const savedName = prompt("Qual é o seu nome de usuário?", state.name);
      if (savedName && savedName.trim().length > 0) {
        state.name = savedName.trim().substring(0, 20);
        state.isLoggedIn = true;
        document.getElementById("profile-name-display").textContent = state.name;
        saveState();
        switchView("dashboard");
      }
    });
  }
  
  const btnRegister = document.getElementById("btn-register");
  if (btnRegister) {
    btnRegister.addEventListener("click", () => {
      playSound('click');
      const newName = prompt("Crie seu novo usuário. Qual será seu nome?", "");
      if (newName && newName.trim().length > 0) {
        state.name = newName.trim().substring(0, 20);
        state.isLoggedIn = true;
        document.getElementById("profile-name-display").textContent = state.name;
        saveState();
        switchView("dashboard");
      }
    });
  }

  // Carregar estado salvo e iniciar
  loadState();
  if (state.isLoggedIn) {
    switchView("dashboard");
  } else {
    switchView("landing");
  }
});
