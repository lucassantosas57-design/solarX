<<<<<<< HEAD
# EDULIMGO

EDULIMGO é uma plataforma web interativa e gamificada projetada para tornar o estudo de matérias escolares do ensino fundamental e médio divertido e engajador.

A plataforma cobre tópicos essenciais de:
- **Matemática** (Fração, Equações, Geometria, etc.)
- **Ciências** (Sistema Solar, Fotossíntese, Anatomia, etc.)
- **Português** (Ortografia, Gramática, Figuras de Linguagem)
- **História** (Egito Antigo, História do Brasil, Constantinopla)
- **Geografia** (Relevo, Biomas do Brasil, Climas do Planeta)

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica da Single Page Application (SPA).
- **CSS3 (Vanilla)**: Design premium adaptativo para mobile e desktop, efeitos 3D, transições suaves e animações.
- **JavaScript (ES6+)**: Mecânica de jogo, banco de dados local de quizzes e persistência de dados.
- **Web Audio API**: Geração de efeitos sonoros retro sintetizados no próprio navegador.
- **Lucide Icons**: Biblioteca de ícones SVG.

## Como Executar
1. Certifique-se de ter todos os arquivos (`index.html`, `style.css`, `app.js`, `logo.png`) na mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Se preferir, inicie um servidor web local e acesse no endereço correspondente.
=======
# ☀️ solarX Educação (EduLingo ODS 4)

Este projeto foi reestruturado para atender à **ODS 4 (Educação de Qualidade)** da ONU, transformando-se em uma plataforma educacional gamificada de alta interatividade voltada para alunos do Ensino Fundamental.

Inspirado na mecânica de sucesso do Duolingo, a plataforma engaja os estudantes por meio de pontuações, vidas, conquistas e competições amigáveis, cobrindo as cinco disciplinas básicas: **Matemática, Português, Ciências, História e Geografia**.

---

## 🚀 Funcionalidades Principais

1. **Painel de Matérias (Dashboard)**: Uma visão geral do progresso em cada matéria com barras de progresso animadas e coloridas.
2. **Quizzes Interativos**: Questões com formato múltipla escolha e verdadeiro/falso ajustados para o nível fundamental. Oferece explicações detalhadas em cada resposta para fixar o aprendizado.
3. **Videoaulas Inteligentes (Funcionam de Verdade)**: Videoaulas reais integradas diretamente à API IFrame do YouTube (com canais renomados como *Khan Academy Brasil*). O sistema rastreia se o aluno está assistindo e concede recompensas após a visualização:
   - ⚡ **Ganho de XP** para subir de nível de estudante.
   - ❤️ **Recarregamento completo das vidas (corações)**, incentivando a revisão por vídeo quando o aluno esgota suas chances nos quizzes.
4. **Sintetizador de Áudio Retro (Web Audio API)**: Efeitos sonoros de acerto, erro, vitória e cliques gerados no próprio navegador, sem dependências de arquivos de áudio externos.
5. **Placar de Líderes (Leaderboard)**: Um placar dinâmico simulado que reposiciona os estudantes em tempo real conforme ganham XP, incentivando o engajamento social.
6. **Conquistas (Achievements)**: Medalhas colecionáveis que se desbloqueiam automaticamente no perfil do aluno ao completar objetivos.
7. **Suporte a Modo Escuro**: Visual otimizado com contraste adaptável para estudos diurnos ou noturnos.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível (SPA).
- **CSS3 Avançado**: Design System moderno baseado em variáveis customizadas HSL, botões táteis com efeito 3D, layouts flexbox/grid responsivos e animações CSS (efeito confete).
- **JavaScript Moderno (ES6+)**: Controle de roteador, gerenciamento de estado persistente (`localStorage`), lógica do quiz e controle de eventos do player do YouTube.
- **Web Audio API**: Geração de sintetizadores de som dinâmicos no navegador.

---

## 📦 Como Executar o Projeto

Como o projeto foi projetado como uma **Single Page Application (SPA)** leve e autônoma, você não precisa instalar nenhuma dependência ou banco de dados!

### Método Rápido (Qualquer Navegador):
1. Faça o download ou clone este repositório.
2. Dê um clique duplo no arquivo `index.html` para abrir diretamente no seu navegador de preferência (Chrome, Edge, Firefox, Safari).

### Método de Desenvolvimento (Recomendado):
Para obter a melhor experiência com a API do YouTube (evitando bloqueios de origem local em alguns navegadores), execute usando um servidor local simples:

- Se você usa **VS Code**, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.
- Ou usando o terminal (com Python ou Node.js instalados na pasta do projeto):
  ```bash
  # Se tiver Node.js instalado globalmente:
  npx serve .
  
  # Se tiver Python instalado:
  python -m http.server 8000
  ```
  Depois abra `http://localhost:8000` (ou a porta indicada) no seu navegador.
>>>>>>> b5bb9150c83dcd1ea9acc56a7b55b81582cc46e5
