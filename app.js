// ================= BANCO DE QUESTÕES ESCOLARES =================
const QUESTIONS_DATABASE = {
    matematica: [
        {
            text: "Se uma pizza é cortada em 8 fatias e você come 3, que fração da pizza resta no prato?",
            options: ["3/8", "5/8", "1/2", "7/8"],
            correct: 1 // "5/8"
        },
        {
            text: "Qual é a área de um triângulo retângulo com base de 10 cm e altura de 6 cm?",
            options: ["60 cm²", "30 cm²", "16 cm²", "20 cm²"],
            correct: 1 // "30 cm²"
        },
        {
            text: "Resolva a equação de primeiro grau para encontrar x: 3x - 7 = 14",
            options: ["5", "7", "9", "21"],
            correct: 1 // "7"
        },
        {
            text: "Se a soma dos ângulos internos de um triângulo é sempre 180°, qual é o valor do terceiro ângulo se dois deles medem 50° e 70°?",
            options: ["50°", "60°", "80°", "90°"],
            correct: 1 // "60°"
        },
        {
            text: "Um tênis de R$ 80,00 é vendido com um desconto especial de 25%. Qual o preço final após o desconto?",
            options: ["R$ 60,00", "R$ 65,00", "R$ 70,00", "R$ 55,00"],
            correct: 0 // "R$ 60,00"
        }
    ],
    ciencias: [
        {
            text: "Qual é o nome do processo pelo qual as plantas utilizam luz solar, água e gás carbônico para produzir oxigênio e glicose?",
            options: ["Respiração celular", "Transpiração", "Fotossíntese", "Combustão"],
            correct: 2 // "Fotossíntese"
        },
        {
            text: "Qual planeta do nosso Sistema Solar é conhecido popularmente como o 'Planeta Vermelho' devido ao óxido de ferro em sua superfície?",
            options: ["Vênus", "Marte", "Júpiter", "Mercúrio"],
            correct: 1 // "Marte"
        },
        {
            text: "Qual é o principal gás que os seres humanos e a maioria dos animais absorvem do ar para realizar a respiração celular?",
            options: ["Nitrogênio", "Gás Carbônico", "Oxigênio", "Hélio"],
            correct: 2 // "Oxigênio"
        },
        {
            text: "O que ocorre com a água pura sob pressão atmosférica normal ao atingir a temperatura de 100°C?",
            options: ["Solidificação (gelo)", "Fusão (líquido)", "Ebulição / Vaporização (gás)", "Condensação"],
            correct: 2 // "Ebulição..."
        },
        {
            text: "Qual destes órgãos é o motor central do sistema cardiovascular humano, responsável por bombear o sangue?",
            options: ["Cérebro", "Coração", "Pulmão", "Fígado"],
            correct: 1 // "Coração"
        }
    ],
    portugues: [
        {
            text: "Qual das palavras abaixo está grafada de forma CORRETA segundo as regras ortográficas vigentes na língua portuguesa?",
            options: ["Ecesão", "Esceção", "Exceção", "Excêção"],
            correct: 2 // "Exceção"
        },
        {
            text: "Qual das opções apresenta o antônimo exato da palavra 'efêmero' (algo passageiro)?",
            options: ["Rápido", "Duradouro", "Frágil", "Momento"],
            correct: 1 // "Duradouro"
        },
        {
            text: "Identifique em qual das frases abaixo o uso do sinal indicativo de crase está empregado CORRETAMENTE:",
            options: ["Ele gosta de caminhar à pé.", "Fomos à escola assistir à palestra ontem.", "Entreguei a carta à ele.", "Isso não se refere à pessoas estranhas."],
            correct: 1 // "Fomos à escola..."
        },
        {
            text: "Na frase 'O silêncio era tão barulhento que doía', qual figura de linguagem expressa essa contradição aparente?",
            options: ["Metáfora", "Pleonasmo", "Oxímoro / Paradoxo", "Hipérbole"],
            correct: 2 // "Oxímoro / Paradoxo"
        },
        {
            text: "Qual é o sujeito da oração: 'Chegaram ontem de manhã os novos livros didáticos para a biblioteca'?",
            options: ["Ontem de manhã", "Os novos livros didáticos para a biblioteca", "Sujeito oculto (Eles)", "Sujeito inexistente"],
            correct: 1 // "Os novos livros didáticos..."
        }
    ],
    historia: [
        {
            text: "Qual antiga civilização foi responsável pela construção das icônicas Grandes Pirâmides de Gizé?",
            options: ["Romanos", "Gregos", "Egípcios", "Astecas"],
            correct: 2 // "Egípcios"
        },
        {
            text: "Em qual ano e dia foi proclamada a República no Brasil, pondo fim ao período imperial?",
            options: ["7 de Setembro de 1822", "15 de Novembro de 1889", "13 de Maio de 1888", "22 de Abril de 1500"],
            correct: 1 // "15 de Novembro de 1889"
        },
        {
            text: "Quem foi a figura militar proclamadora e o primeiro presidente constitucional da República do Brasil?",
            options: ["Getúlio Vargas", "Dom Pedro II", "Marechal Deodoro da Fonseca", "Floriano Peixoto"],
            correct: 2 // "Marechal Deodoro da Fonseca"
        },
        {
            text: "A Queda de Constantinopla, ocorrida em 1453, é convencionalmente utilizada pelos historiadores como o marco inicial de qual Idade?",
            options: ["Idade Média", "Idade Moderna", "Idade Contemporânea", "Idade Antiga"],
            correct: 1 // "Idade Moderna"
        },
        {
            text: "O que foi o Tratado de Tordesilhas assinado no ano de 1494 entre as potências da época?",
            options: ["Um acordo comercial de venda de especiarias", "Um tratado que dividia as terras recém-descobertas entre Portugal e Espanha", "O tratado que oficializou a paz entre a França e a Inglaterra", "O pacto de independência da América Latina"],
            correct: 1 // "Um tratado que dividia..."
        }
    ],
    geografia: [
        {
            text: "Qual é o maior país do planeta Terra em termos de extensão territorial contínua?",
            options: ["Canadá", "China", "Estados Unidos", "Rússia"],
            correct: 3 // "Rússia"
        },
        {
            text: "Qual é a capital federal oficial da Austrália, projetada especialmente para esse fim?",
            options: ["Sydney", "Melbourne", "Camberra", "Brisbane"],
            correct: 2 // "Camberra"
        },
        {
            text: "O Monte Everest, considerado o ponto mais alto da Terra acima do nível do mar, fica localizado em qual cordilheira?",
            options: ["Andes", "Alpes", "Himalaia", "Montanhas Rochosas"],
            correct: 2 // "Himalaia"
        },
        {
            text: "Qual é o maior bioma brasileiro, ocupando cerca de 40% do território nacional e detentor de uma imensa biodiversidade?",
            options: ["Pantanal", "Cerrado", "Caatinga", "Amazônia"],
            correct: 3 // "Amazônia"
        },
        {
            text: "Como se chama o fenômeno atmosférico-oceânico caracterizado pelo aquecimento anormal das águas superficiais do Oceano Pacífico Equatorial?",
            options: ["La Niña", "El Niño", "Monção de Verão", "Tsunami Pacífico"],
            correct: 1 // "El Niño"
        }
    ]
};

// ================= ESTADO DO USUÁRIO (PERSISTÊNCIA) =================
const DEFAULT_STATE = {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    studentName: "Estudante Edulimgo",
    completedLessons: 0,
    unlockedAchievements: [],
    subjectLevels: {
        matematica: 1,
        ciencias: 1,
        portugues: 1,
        historia: 1,
        geografia: 1
    }
};

let userState = { ...DEFAULT_STATE };

// ================= INICIALIZAÇÃO DA APLICAÇÃO =================
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupRouting();
    setupEventListeners();
    updateUI();
    lucide.createIcons();
});

// Carregar progresso do LocalStorage
function loadState() {
    const saved = localStorage.getItem("edulimgo_user_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            userState = { ...DEFAULT_STATE, ...parsed };
            // Garantir que os sub-níveis existam
            userState.subjectLevels = { ...DEFAULT_STATE.subjectLevels, ...parsed.subjectLevels };
        } catch (e) {
            console.error("Erro ao carregar dados do LocalStorage, usando padrão.", e);
            userState = { ...DEFAULT_STATE };
        }
    }
    checkStreakValidity();
}

// Salvar progresso no LocalStorage
function saveState() {
    localStorage.setItem("edulimgo_user_state", JSON.stringify(userState));
    updateUI();
}

// Verificar se o streak expirou (passou mais de 24h desde a última atividade)
function checkStreakValidity() {
    if (!userState.lastActiveDate) return;
    
    const todayStr = getTodayString();
    const lastActive = userState.lastActiveDate;
    
    if (lastActive !== todayStr) {
        const lastActiveDateObj = new Date(lastActive);
        const todayDateObj = new Date(todayStr);
        const diffTime = Math.abs(todayDateObj - lastActiveDateObj);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
            // Perdeu o streak
            userState.streak = 0;
            saveState();
        }
    }
}

// Pegar string de data no formato YYYY-MM-DD
function getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ================= SISTEMA DE ÁUDIO SINTETIZADO (WEB AUDIO API) =================
// Produz efeitos sonoros retro/gamificados sem precisar baixar arquivos mp3
function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        if (type === "correct") {
            // Arpejo alegre ascendente
            const now = ctx.currentTime;
            
            const osc1 = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            osc1.type = "sine";
            osc1.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            // Nota 1 (C5)
            osc1.frequency.setValueAtTime(523.25, now);
            gainNode.gain.setValueAtTime(0.15, now);
            
            // Nota 2 (E5)
            osc1.frequency.setValueAtTime(659.25, now + 0.08);
            
            // Nota 3 (G5)
            osc1.frequency.setValueAtTime(783.99, now + 0.16);
            
            // Finaliza som
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
            osc1.start(now);
            osc1.stop(now + 0.4);
            
        } else if (type === "incorrect") {
            // Nota grave, com vibrato descendente de erro
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            osc.type = "sawtooth";
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(90, now + 0.3);
            
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
            
            osc.start(now);
            osc.stop(now + 0.3);
            
        } else if (type === "complete") {
            // Fanfarra triunfal curta
            const now = ctx.currentTime;
            
            const playNote = (freq, start, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "triangle";
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.15, start);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
                
                osc.start(start);
                osc.stop(start + duration);
            };
            
            playNote(261.63, now, 0.15); // C4
            playNote(329.63, now + 0.15, 0.15); // E4
            playNote(392.00, now + 0.30, 0.15); // G4
            playNote(523.25, now + 0.45, 0.40); // C5 (Segura mais tempo)
        }
    } catch (e) {
        console.warn("Navegador bloqueou áudio ou Web Audio API não é suportada.", e);
    }
}

// ================= ENGINES DE VISTA & ROTEAMENTO =================
const VIEWS = {
    LANDING: "landing-view",
    DASHBOARD: "dashboard-view",
    LESSON: "lesson-view",
    RECAP: "recap-view",
    PROFILE: "profile-view"
};

function navigateTo(viewId) {
    // Esconder todas as seções
    Object.values(VIEWS).forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });
    
    // Mostrar a seção alvo
    document.getElementById(viewId).classList.remove("hidden");
    
    // Controlar visibilidade do cabeçalho principal
    const header = document.getElementById("main-header");
    if (viewId === VIEWS.LANDING || viewId === VIEWS.LESSON) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    
    // Atualizar links ativos da barra de navegação superior
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });
    
    if (viewId === VIEWS.DASHBOARD) {
        document.getElementById("nav-dashboard").classList.add("active");
    } else if (viewId === VIEWS.PROFILE) {
        document.getElementById("nav-profile").classList.add("active");
    }
    
    // Rolar para o topo da página ao mudar de tela
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupRouting() {
    // Se o usuário já tiver dados, vai para o dashboard, senão fica na landing page
    if (userState.xp > 0 || userState.completedLessons > 0) {
        navigateTo(VIEWS.DASHBOARD);
    } else {
        navigateTo(VIEWS.LANDING);
    }
}

// ================= ATUALIZAÇÃO DA INTERFACE (UI) =================
function updateUI() {
    // 1. Atualizar Header
    document.getElementById("header-streak-value").innerText = userState.streak;
    document.getElementById("header-xp-value").innerText = userState.xp;
    
    // 2. Atualizar Nível & Barra de Progresso no Dashboard
    const levelInfo = calculateLevel(userState.xp);
    document.getElementById("student-level").innerText = `Nível ${levelInfo.level} - ${levelInfo.title}`;
    document.getElementById("student-name").innerText = userState.studentName;
    document.getElementById("profile-name-val").innerText = userState.studentName;
    document.getElementById("input-edit-name").value = userState.studentName;
    
    document.getElementById("xp-current").innerText = `${userState.xp} XP`;
    
    if (levelInfo.nextLevelXP === Infinity) {
        document.getElementById("xp-target").innerText = "Nível Máximo Atingido!";
        document.getElementById("xp-progress-fill").style.width = "100%";
    } else {
        const xpProgressPercentage = (levelInfo.xpInCurrentLevel / levelInfo.xpNeededForNext) * 100;
        document.getElementById("xp-target").innerText = `${levelInfo.xpNeededForNext - levelInfo.xpInCurrentLevel} XP para Nível ${levelInfo.level + 1}`;
        document.getElementById("xp-progress-fill").style.width = `${xpProgressPercentage}%`;
    }

    // 3. Atualizar Status das Matérias nos Cards
    Object.keys(userState.subjectLevels).forEach(subj => {
        const lvl = userState.subjectLevels[subj];
        const statusEl = document.getElementById(`status-${subj}`);
        if (statusEl) {
            statusEl.innerText = `Nível ${lvl} - ${getSubjectRank(lvl)}`;
        }
    });

    // 4. Atualizar Conquistas no Perfil e no Dashboard
    updateAchievementsUI();
}

// Calcula nível baseado no XP total (escala linear simples: 100 XP por nível)
function calculateLevel(totalXP) {
    const level = Math.floor(totalXP / 100) + 1;
    const xpInCurrentLevel = totalXP % 100;
    const xpNeededForNext = 100;
    
    let title = "Iniciante";
    if (level >= 10) title = "Doutor da Escola";
    else if (level >= 7) title = "Mestre Intelectual";
    else if (level >= 5) title = "Sábio da Classe";
    else if (level >= 3) title = "Explorador";
    
    return {
        level,
        xpInCurrentLevel,
        xpNeededForNext,
        title
    };
}

// Ranks baseados no nível individual de uma matéria
function getSubjectRank(level) {
    if (level >= 5) return "Mestre";
    if (level >= 3) return "Intermediário";
    return "Básico";
}

// Atualizar a área de medalhas (conquistas) no perfil e dashboard
function updateAchievementsUI() {
    const checkBadge = (badgeId, isUnlocked) => {
        const badgeEl = document.getElementById(badgeId);
        if (badgeEl) {
            if (isUnlocked) {
                badgeEl.classList.remove("locked");
            } else {
                badgeEl.classList.add("locked");
            }
        }
    };

    const isFirstLesson = userState.unlockedAchievements.includes("first-lesson");
    const isPerfect = userState.unlockedAchievements.includes("perfect-lesson");
    const isFive = userState.unlockedAchievements.includes("five-lessons");
    const isStreak = userState.unlockedAchievements.includes("streak-3");

    checkBadge("badge-first-lesson", isFirstLesson);
    checkBadge("badge-perfect-lesson", isPerfect);
    checkBadge("badge-five-lessons", isFive);
    checkBadge("badge-streak-3", isStreak);

    // Dashboard extra
    checkBadge("dash-badge-first-lesson", isFirstLesson);
    checkBadge("dash-badge-perfect-lesson", isPerfect);
    checkBadge("dash-badge-five-lessons", isFive);
    checkBadge("dash-badge-streak-3", isStreak);
}

// ================= CONFIGURAÇÃO DE EVENTOS DO USUÁRIO =================
function setupEventListeners() {
    // 1. Modais de Autenticação
    const authModal = document.getElementById("auth-modal");
    const openAuthModal = (title) => {
        document.getElementById("modal-title").innerText = title;
        authModal.classList.remove("hidden");
    };

    document.getElementById("btn-login").addEventListener("click", () => openAuthModal("Login"));
    document.getElementById("btn-register").addEventListener("click", () => openAuthModal("Cadastre-se"));
    document.getElementById("btn-close-modal").addEventListener("click", () => authModal.classList.add("hidden"));
    
    document.getElementById("btn-auth-submit").addEventListener("click", () => {
        authModal.classList.add("hidden");
        // Simulação de login/registro
        navigateTo(VIEWS.DASHBOARD);
    });

    // 2. Logo Home Click
    document.getElementById("btn-logo-home").addEventListener("click", () => {
        if (userState.xp > 0 || userState.completedLessons > 0) {
            navigateTo(VIEWS.DASHBOARD);
        } else {
            navigateTo(VIEWS.LANDING);
        }
    });

    // 3. Navegação Superior
    document.getElementById("nav-dashboard").addEventListener("click", () => {
        navigateTo(VIEWS.DASHBOARD);
    });
    document.getElementById("nav-profile").addEventListener("click", () => {
        navigateTo(VIEWS.PROFILE);
    });

    // 4. Landing CTA
    document.getElementById("btn-start-playing").addEventListener("click", () => {
        navigateTo(VIEWS.DASHBOARD);
    });

    // 5. Alternador de Tema (Dark / Light)
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const htmlClassList = document.documentElement.classList;
        if (htmlClassList.contains("dark")) {
            htmlClassList.remove("dark");
            localStorage.setItem("edulimgo_theme", "light");
        } else {
            htmlClassList.add("dark");
            localStorage.setItem("edulimgo_theme", "dark");
        }
        lucide.createIcons(); // Recriar ícones para atualizar
    });

    // Carregar tema preferido
    const savedTheme = localStorage.getItem("edulimgo_theme");
    if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }

    // 6. Botões de Iniciar Matéria no Dashboard
    document.querySelectorAll(".btn-start-subject").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const btnTarget = e.currentTarget;
            const subject = btnTarget.getAttribute("data-subject");
            startLesson(subject);
        });
    });

    // 7. Botão Sair da Lição (Exit Modal)
    document.getElementById("btn-quit-lesson").addEventListener("click", () => {
        if (confirm("Quer mesmo desistir da lição? Seu progresso atual não será salvo!")) {
            navigateTo(VIEWS.DASHBOARD);
        }
    });

    // 8. Salvar alteração de nome no perfil
    document.getElementById("btn-save-name").addEventListener("click", () => {
        const input = document.getElementById("input-edit-name");
        const val = input.value.trim();
        if (val) {
            userState.studentName = val;
            saveState();
            alert("Nome salvo com sucesso!");
        }
    });

    // 9. Reiniciar progresso
    document.getElementById("btn-reset-progress").addEventListener("click", () => {
        if (confirm("ATENÇÃO: Isso apagará todo o seu progresso acumulado na EDULIMGO de forma definitiva. Tem certeza que deseja prosseguir?")) {
            userState = { ...DEFAULT_STATE };
            userState.subjectLevels = { ...DEFAULT_STATE.subjectLevels };
            saveState();
            navigateTo(VIEWS.LANDING);
            alert("Progresso reiniciado.");
        }
    });

    // 10. Concluir tela de recap
    document.getElementById("btn-recap-done").addEventListener("click", () => {
        navigateTo(VIEWS.DASHBOARD);
    });
}

// ================= CONTROLE DE LIÇÕES (JOGO) =================
let activeLesson = {
    subject: "",
    questionsList: [],
    currentIndex: 0,
    lives: 3,
    correctCount: 0,
    selectedOptionIdx: null,
    isAnswerChecked: false
};

function startLesson(subject) {
    const rawQuestions = QUESTIONS_DATABASE[subject];
    if (!rawQuestions) return;

    // Clonar e embaralhar perguntas
    const shuffledQuestions = [...rawQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5); // 5 perguntas por lição

    activeLesson = {
        subject: subject,
        questionsList: shuffledQuestions,
        currentIndex: 0,
        lives: 3,
        correctCount: 0,
        selectedOptionIdx: null,
        isAnswerChecked: false
    };

    // Atualizar cor de fundo da pill da matéria
    const badge = document.getElementById("question-subject-badge");
    badge.innerText = getSubjectLabel(subject);
    badge.className = "question-badge bg-" + getSubjectColorClass(subject);

    // Reiniciar vidas/corações visuais
    updateHeartsUI();

    // Mostrar tela de lições
    navigateTo(VIEWS.LESSON);
    
    // Renderizar primeira questão
    loadQuestion();
}

function getSubjectLabel(subject) {
    const labels = {
        matematica: "Matemática",
        ciencias: "Ciências",
        portugues: "Português",
        historia: "História",
        geografia: "Geografia"
    };
    return labels[subject] || subject;
}

function getSubjectColorClass(subject) {
    const colors = {
        matematica: "math-theme",
        ciencias: "science-theme",
        portugues: "portuguese-theme",
        historia: "history-theme",
        geografia: "geography-theme"
    };
    return colors[subject] || "primary";
}

function updateHeartsUI() {
    for (let i = 1; i <= 3; i++) {
        const heart = document.getElementById(`heart-${i}`);
        if (i <= activeLesson.lives) {
            heart.classList.remove("broken");
            heart.classList.add("fill-red");
        } else {
            heart.classList.remove("fill-red");
            heart.classList.add("broken");
        }
    }
}

function loadQuestion() {
    const currentQ = activeLesson.questionsList[activeLesson.currentIndex];
    
    // Atualizar texto da questão
    document.getElementById("question-text").innerText = currentQ.text;
    
    // Atualizar barra de progresso da lição
    const progressPercent = (activeLesson.currentIndex / activeLesson.questionsList.length) * 100;
    document.getElementById("lesson-progress-fill").style.width = `${progressPercent}%`;

    // Gerar opções de respostas
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    activeLesson.selectedOptionIdx = null;
    activeLesson.isAnswerChecked = false;

    // Resetar barra de feedback inferior
    const fbBar = document.getElementById("feedback-bar");
    fbBar.classList.remove("show", "correct-theme", "incorrect-theme");
    document.getElementById("feedback-correct").classList.add("hidden");
    document.getElementById("feedback-incorrect").classList.add("hidden");

    // Resetar botão da ação
    const actionBtn = document.getElementById("btn-action-quiz");
    actionBtn.classList.add("disabled");
    actionBtn.innerHTML = `<span>Verificar</span>`;

    currentQ.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `
            <span class="option-index">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${opt}</span>
        `;
        
        btn.addEventListener("click", () => {
            if (activeLesson.isAnswerChecked) return;
            selectOption(idx);
        });

        grid.appendChild(btn);
    });

    lucide.createIcons();
}

function selectOption(index) {
    activeLesson.selectedOptionIdx = index;
    
    // Remover seleção visual dos outros botões
    const options = document.querySelectorAll("#options-grid .option-btn");
    options.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });

    // Ativar botão de verificação
    const actionBtn = document.getElementById("btn-action-quiz");
    actionBtn.classList.remove("disabled");
}

// Configurar o clique no botão de ação da lição (Verificar ou Continuar)
document.getElementById("btn-action-quiz").addEventListener("click", () => {
    const actionBtn = document.getElementById("btn-action-quiz");
    if (actionBtn.classList.contains("disabled")) return;

    if (!activeLesson.isAnswerChecked) {
        checkAnswer();
    } else {
        advanceLesson();
    }
});

function checkAnswer() {
    activeLesson.isAnswerChecked = true;
    const currentQ = activeLesson.questionsList[activeLesson.currentIndex];
    const userChoice = activeLesson.selectedOptionIdx;
    const isCorrect = userChoice === currentQ.correct;

    const options = document.querySelectorAll("#options-grid .option-btn");
    const fbBar = document.getElementById("feedback-bar");
    const actionBtn = document.getElementById("btn-action-quiz");

    // Desabilitar todas as opções
    options.forEach(btn => btn.style.cursor = "not-allowed");

    if (isCorrect) {
        activeLesson.correctCount++;
        playSound("correct");
        
        // Estilo correto para a opção selecionada
        options[userChoice].style.borderColor = "var(--color-green)";
        options[userChoice].style.backgroundColor = "rgba(34, 197, 94, 0.08)";
        options[userChoice].style.color = "var(--color-green)";
        options[userChoice].querySelector(".option-index").style.backgroundColor = "var(--color-green)";
        options[userChoice].querySelector(".option-index").style.borderColor = "var(--color-green)";
        options[userChoice].querySelector(".option-index").style.color = "#ffffff";

        // Mostrar barra verde de sucesso
        fbBar.classList.add("show", "correct-theme");
        document.getElementById("feedback-correct").classList.remove("hidden");

    } else {
        activeLesson.lives--;
        playSound("incorrect");
        updateHeartsUI();

        // Estilo incorreto para a opção selecionada
        options[userChoice].style.borderColor = "var(--color-red)";
        options[userChoice].style.backgroundColor = "rgba(239, 68, 68, 0.08)";
        options[userChoice].style.color = "var(--color-red)";
        options[userChoice].querySelector(".option-index").style.backgroundColor = "var(--color-red)";
        options[userChoice].querySelector(".option-index").style.borderColor = "var(--color-red)";
        options[userChoice].querySelector(".option-index").style.color = "#ffffff";

        // Realçar a resposta certa em verde
        const correctIdx = currentQ.correct;
        options[correctIdx].style.borderColor = "var(--color-green)";
        options[correctIdx].style.color = "var(--color-green)";

        // Sacudir o card do Quiz
        const container = document.getElementById("quiz-container");
        container.classList.add("animate-shake");
        container.addEventListener("animationend", () => {
            container.classList.remove("animate-shake");
        }, { once: true });

        // Mostrar barra vermelha de erro
        document.getElementById("correct-answer-text").innerText = currentQ.options[correctIdx];
        fbBar.classList.add("show", "incorrect-theme");
        document.getElementById("feedback-incorrect").classList.remove("hidden");
    }

    actionBtn.innerHTML = `<span>Continuar</span>`;
    lucide.createIcons();
}

function advanceLesson() {
    // Se o estudante perder todas as vidas
    if (activeLesson.lives <= 0) {
        finishLesson(false);
        return;
    }

    activeLesson.currentIndex++;

    // Se a lição chegou ao fim
    if (activeLesson.currentIndex >= activeLesson.questionsList.length) {
        finishLesson(true);
    } else {
        loadQuestion();
    }
}

function finishLesson(isVictory) {
    const fbBar = document.getElementById("feedback-bar");
    fbBar.classList.remove("show");

    if (isVictory) {
        playSound("complete");
        
        // Calcular XP ganho
        const xpEarned = activeLesson.correctCount * 5; // 5 XP por acerto
        const baseXP = 10; // XP de bônus por conclusão
        const totalXpGained = xpEarned + baseXP;

        // Atualizar ofensiva (streak)
        let oldStreak = userState.streak;
        let newStreak = oldStreak;
        const todayStr = getTodayString();
        
        if (userState.lastActiveDate === null) {
            newStreak = 1;
        } else if (userState.lastActiveDate !== todayStr) {
            newStreak = oldStreak + 1;
        }
        
        userState.streak = newStreak;
        userState.lastActiveDate = todayStr;
        userState.xp += totalXpGained;
        userState.completedLessons++;

        // Incrementar o nível da matéria estudada
        const currentSubjLvl = userState.subjectLevels[activeLesson.subject] || 1;
        // Sobe o nível da matéria se acertar pelo menos 3 questões
        if (activeLesson.correctCount >= 3) {
            userState.subjectLevels[activeLesson.subject] = currentSubjLvl + 1;
        }

        // Sistema de desbloqueio de conquistas
        unlockAchievementsCheck(isVictory);

        saveState();

        // Mostrar tela de recapitulação vitoriosa
        document.getElementById("recap-title").innerText = "Lição Concluída!";
        document.getElementById("recap-subtitle").innerText = `Incrível trabalho! Você completou a lição de ${getSubjectLabel(activeLesson.subject)}.`;
        document.getElementById("recap-xp").innerText = `+${totalXpGained} XP`;
        
        const accuracy = Math.round((activeLesson.correctCount / activeLesson.questionsList.length) * 100);
        document.getElementById("recap-accuracy").innerText = `${accuracy}%`;
        document.getElementById("recap-streak").innerText = `${newStreak} ${newStreak === 1 ? 'Dia' : 'Dias'}`;
        
        navigateTo(VIEWS.RECAP);
    } else {
        // Derrota por falta de vidas
        playSound("incorrect");
        document.getElementById("recap-title").innerText = "Fim de Jogo!";
        document.getElementById("recap-subtitle").innerText = `Você ficou sem corações. Mas não desanime, o erro faz parte do aprendizado! Tente novamente.`;
        document.getElementById("recap-xp").innerText = `+0 XP`;
        document.getElementById("recap-accuracy").innerText = "0%";
        document.getElementById("recap-streak").innerText = `${userState.streak} ${userState.streak === 1 ? 'Dia' : 'Dias'}`;
        
        navigateTo(VIEWS.RECAP);
    }
}

function unlockAchievementsCheck(isVictory) {
    if (!isVictory) return;
    
    const unlocked = userState.unlockedAchievements;
    
    // 1. Decolagem (Primeira lição)
    if (!unlocked.includes("first-lesson")) {
        unlocked.push("first-lesson");
    }
    
    // 2. Imbatível (Lição perfeita - 5/5)
    if (activeLesson.correctCount === 5 && !unlocked.includes("perfect-lesson")) {
        unlocked.push("perfect-lesson");
    }
    
    // 3. Cérebro de Ouro (5 lições totais)
    if (userState.completedLessons >= 5 && !unlocked.includes("five-lessons")) {
        unlocked.push("five-lessons");
    }
    
    // 4. Em Chamas (Streak de 3 dias)
    if (userState.streak >= 3 && !unlocked.includes("streak-3")) {
        unlocked.push("streak-3");
    }
}
