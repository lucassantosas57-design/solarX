<<<<<<< HEAD
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

    // 4. Atualizar Conquistas no Perfil
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

// Atualizar a área de medalhas (conquistas) no perfil
function updateAchievementsUI() {
    const checkBadge = (badgeId, isUnlocked) => {
        const badgeEl = document.getElementById(badgeId);
        if (badgeEl) {
            if (isUnlocked) {
                badgeEl.classList.remove("locked");
                // Substitui ou adiciona elemento brilhante
            } else {
                badgeEl.classList.add("locked");
            }
        }
    };

    checkBadge("badge-first-lesson", userState.unlockedAchievements.includes("first-lesson"));
    checkBadge("badge-perfect-lesson", userState.unlockedAchievements.includes("perfect-lesson"));
    checkBadge("badge-five-lessons", userState.unlockedAchievements.includes("five-lessons"));
    checkBadge("badge-streak-3", userState.unlockedAchievements.includes("streak-3"));
}

// ================= CONFIGURAÇÃO DE EVENTOS DO USUÁRIO =================
function setupEventListeners() {
    // 1. Logo Home Click
    document.getElementById("btn-logo-home").addEventListener("click", () => {
        if (userState.xp > 0 || userState.completedLessons > 0) {
            navigateTo(VIEWS.DASHBOARD);
        } else {
            navigateTo(VIEWS.LANDING);
        }
    });

    // 2. Navegação Superior
    document.getElementById("nav-dashboard").addEventListener("click", () => {
        navigateTo(VIEWS.DASHBOARD);
    });
    document.getElementById("nav-profile").addEventListener("click", () => {
        navigateTo(VIEWS.PROFILE);
    });

    // 3. Landing CTA
    document.getElementById("btn-start-playing").addEventListener("click", () => {
        navigateTo(VIEWS.DASHBOARD);
    });

    // 4. Alternador de Tema (Dark / Light)
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

    // 5. Botões de Iniciar Matéria no Dashboard
    document.querySelectorAll(".btn-start-subject").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const btnTarget = e.currentTarget;
            const subject = btnTarget.getAttribute("data-subject");
            startLesson(subject);
        });
    });

    // 6. Botão Sair da Lição (Exit Modal)
    document.getElementById("btn-quit-lesson").addEventListener("click", () => {
        if (confirm("Quer mesmo desistir da lição? Seu progresso atual não será salvo!")) {
            navigateTo(VIEWS.DASHBOARD);
        }
    });

    // 7. Salvar alteração de nome no perfil
    document.getElementById("btn-save-name").addEventListener("click", () => {
        const input = document.getElementById("input-edit-name");
        const val = input.value.trim();
        if (val) {
            userState.studentName = val;
            saveState();
            alert("Nome salvo com sucesso!");
        }
    });

    // 8. Reiniciar progresso
    document.getElementById("btn-reset-progress").addEventListener("click", () => {
        if (confirm("ATENÇÃO: Isso apagará todo o seu progresso acumulado na EDULIMGO de forma definitiva. Tem certeza que deseja prosseguir?")) {
            userState = { ...DEFAULT_STATE };
            userState.subjectLevels = { ...DEFAULT_STATE.subjectLevels };
            saveState();
            navigateTo(VIEWS.LANDING);
            alert("Progresso reiniciado.");
        }
    });

    // 9. Concluir tela de recap
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
=======
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
    lastStudyDate: state.lastStudyDate
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
const views = ["dashboard", "subject", "quiz", "video", "leaderboard", "profile"];

function switchView(viewName) {
  playSound('click');
  state.currentView = viewName;
  
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
  if (viewName === "quiz") {
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
  
  // Carregar estado salvo e iniciar
  loadState();
  switchView("dashboard");
});
>>>>>>> b5bb9150c83dcd1ea9acc56a7b55b81582cc46e5
