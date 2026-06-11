// Banco de dados de lições, quizzes e videoaulas da plataforma solarX ODS 4
const subjectsData = {
  matematica: {
    name: "Matemática",
    color: "var(--color-math)",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    tagline: "Desvende os mistérios dos números e das formas!",
    lessons: [
      {
        id: "mat_l1",
        title: "Aventuras com Adição",
        xp: 20,
        questions: [
          {
            type: "choice",
            question: "Se você tem 5 maçãs e ganha mais 7 maçãs, com quantas maçãs você fica?",
            options: ["10", "11", "12", "13"],
            answer: "12",
            explanation: "Exatamente! 5 + 7 = 12. Você somou as duas quantidades para obter o total."
          },
          {
            type: "boolean",
            question: "A soma de qualquer número com zero (0) é igual a ele mesmo. Verdadeiro ou Falso?",
            options: ["Verdadeiro", "Falso"],
            answer: "Verdadeiro",
            explanation: "Correto! O zero é o elemento neutro da adição. Somar zero não altera o valor."
          },
          {
            type: "choice",
            question: "Qual o resultado de 15 - 9?",
            options: ["5", "6", "7", "8"],
            answer: "6",
            explanation: "Muito bem! 15 - 9 = 6. Se você tirar 9 de 15, sobram 6."
          }
        ]
      },
      {
        id: "mat_l2",
        title: "Desbravando as Frações",
        xp: 25,
        questions: [
          {
            type: "choice",
            question: "Se dividirmos uma pizza redonda em 4 pedaços iguais e comermos 1 pedaço, qual fração representa o que comemos?",
            options: ["1/2", "1/4", "3/4", "1/3"],
            answer: "1/4",
            explanation: "Perfeito! O número de baixo (denominador) representa o total de partes (4) e o de cima (numerador) o que comemos (1). Então fica 1/4."
          },
          {
            type: "choice",
            question: "Qual fração é equivalente a 1/2?",
            options: ["2/4", "1/3", "2/3", "1/5"],
            answer: "2/4",
            explanation: "Isso aí! Se você tem uma pizza e come 2 pedaços de 4 (2/4), você comeu a metade exata (1/2) dela!"
          }
        ]
      }
    ],
    videos: [
      {
        id: "mat_v1",
        title: "Introdução às Frações",
        youtubeId: "R9V4yK5cWkI",
        description: "Entenda o conceito básico de frações e como elas estão no nosso dia a dia, como ao cortar uma pizza!",
        duration: "6 min",
        xp: 40
      }
    ]
  },
  portugues: {
    name: "Português",
    color: "var(--color-portuguese)",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    tagline: "Explore o poder das palavras e da nossa língua!",
    lessons: [
      {
        id: "port_l1",
        title: "O Mundo dos Substantivos",
        xp: 20,
        questions: [
          {
            type: "choice",
            question: "Qual das palavras abaixo é um substantivo próprio (nome de pessoa, lugar ou país)?",
            options: ["cachorro", "Brasil", "bonito", "correr"],
            answer: "Brasil",
            explanation: "Excelente! Substantivos próprios dão nome a seres específicos e sempre começam com letra maiúscula, como 'Brasil'!"
          },
          {
            type: "choice",
            question: "Na frase 'O gato preto correu no quintal', qual palavra é um adjetivo (característica)?",
            options: ["gato", "preto", "correu", "quintal"],
            answer: "preto",
            explanation: "Correto! 'Preto' indica a cor/característica do gato. É um adjetivo!"
          },
          {
            type: "choice",
            question: "Qual é o coletivo de 'cães'?",
            options: ["Alcateia", "Enxame", "Matilha", "Cardume"],
            answer: "Matilha",
            explanation: "Muito bem! O coletivo de cães é matilha. Alcateia é de lobos, enxame é de abelhas e cardume é de peixes!"
          }
        ]
      }
    ],
    videos: [
      {
        id: "port_v1",
        title: "O que são Substantivos?",
        youtubeId: "A9RbMzVHGEs",
        description: "Descubra como os substantivos servem para dar nome a todas as coisas que nos rodeiam!",
        duration: "5 min",
        xp: 40
      }
    ]
  },
  ciencias: {
    name: "Ciências",
    color: "var(--color-science)",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="2" x2="14" y2="2"></line><line x1="12" y1="2" x2="12" y2="10"></line><path d="M8.5 20h7l-3.5-6L8.5 20z"></path><path d="M12 2a15.3 15.3 0 0 1 4 10l3.5 8h-15l3.5-8A15.3 15.3 0 0 1 12 2z"></path></svg>`,
    tagline: "Desvende as leis do universo e a beleza da natureza!",
    lessons: [
      {
        id: "cie_l1",
        title: "Viagem pelo Sistema Solar",
        xp: 20,
        questions: [
          {
            type: "choice",
            question: "Qual é a estrela central do nosso Sistema Solar, que fornece luz e calor à Terra?",
            options: ["Lua", "Marte", "Sol", "Júpiter"],
            answer: "Sol",
            explanation: "Certíssimo! O Sol é a estrela no centro do nosso sistema que mantém todos os planetas em órbita!"
          },
          {
            type: "choice",
            question: "Qual é o planeta mais próximo do Sol?",
            options: ["Terra", "Vênus", "Marte", "Mercúrio"],
            answer: "Mercúrio",
            explanation: "Perfeito! Mercúrio é o primeiro planeta do Sistema Solar, sendo o mais próximo do Sol e muito quente!"
          },
          {
            type: "boolean",
            question: "A Terra leva aproximadamente 365 dias (um ano) para dar uma volta completa ao redor do Sol. Verdadeiro ou Falso?",
            options: ["Verdadeiro", "Falso"],
            answer: "Verdadeiro",
            explanation: "Muito bem! Esse movimento se chama translação e define o nosso ano terrestre."
          }
        ]
      }
    ],
    videos: [
      {
        id: "cie_v1",
        title: "A Via Láctea e o Sistema Solar",
        youtubeId: "kYJ-wL-l-Z0",
        description: "Faça uma incrível viagem cósmica e descubra onde fica a Terra e como funciona nosso Sistema Solar!",
        duration: "8 min",
        xp: 40
      }
    ]
  },
  historia: {
    name: "História",
    color: "var(--color-history)",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    tagline: "Viaje no tempo e conheça as origens do nosso mundo!",
    lessons: [
      {
        id: "his_l1",
        title: "A Chegada ao Brasil",
        xp: 20,
        questions: [
          {
            type: "choice",
            question: "Em qual ano a expedição portuguesa liderada por Pedro Álvares Cabral chegou ao Brasil?",
            options: ["1492", "1500", "1600", "1822"],
            answer: "1500",
            explanation: "Isso mesmo! Em 22 de abril de 1500, a frota de Cabral avistou o Monte Pascoal no Brasil."
          },
          {
            type: "choice",
            question: "Quais eram os habitantes originais que já viviam no Brasil muito antes da chegada dos portugueses?",
            options: ["Espanhóis", "Indígenas", "Africanos", "Italianos"],
            answer: "Indígenas",
            explanation: "Excelente! Os povos indígenas habitavam todo o território brasileiro e possuíam ricas culturas e línguas próprias."
          }
        ]
      }
    ],
    videos: [
      {
        id: "his_v1",
        title: "Descobrimento do Brasil",
        youtubeId: "D0_YgZ9-l0w",
        description: "Assista a uma explicação animada e cheia de curiosidades sobre como foi o encontro entre portugueses e indígenas em 1500!",
        duration: "12 min",
        xp: 50
      }
    ]
  },
  geografia: {
    name: "Geografia",
    color: "var(--color-geography)",
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    tagline: "Desbrave paisagens, mapas e climas da nossa Terra!",
    lessons: [
      {
        id: "geo_l1",
        title: "O Planeta e o Universo",
        xp: 20,
        questions: [
          {
            type: "choice",
            question: "Como se chama o movimento que a Terra faz em torno do seu próprio eixo, gerando o dia e a noite?",
            options: ["Translação", "Gravitação", "Rotação", "Órbita"],
            answer: "Rotação",
            explanation: "Correto! A rotação é o giro que a Terra dá em torno de si mesma, durando cerca de 24 horas."
          },
          {
            type: "choice",
            question: "Qual é o nome do satélite natural da Terra?",
            options: ["Sol", "Lua", "Marte", "Estrela Cadente"],
            answer: "Lua",
            explanation: "Perfeito! A Lua é o nosso único satélite natural e brilha à noite refletindo a luz do Sol."
          }
        ]
      }
    ],
    videos: [
      {
        id: "geo_v1",
        title: "O Lugar da Terra no Universo",
        youtubeId: "sI9WqUa4FpY",
        description: "Entenda a nossa localização no espaço e como os movimentos de rotação e translação definem a vida na Terra!",
        duration: "7 min",
        xp: 40
      }
    ]
  }
};
