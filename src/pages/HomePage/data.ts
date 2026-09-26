export const GITHUB_URL = 'https://github.com/QWQFuLan';
export const EMAIL = 'qwqfulan@outlook.com';

export type Lang = 'zh' | 'en';

export interface Project {
  name: string;
  nameEn: string;
  tech: string;
  url: string;
  desc: string;
  descEn: string;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    name: '算術鬧鐘',
    nameEn: 'Arithmetic Alarm',
    tech: 'JS',
    url: 'https://github.com/QWQFuLan/Arithmetic-Alarm-Clock',
    desc: '香港數學課程主題鬧鐘：響鈴時必須解出對應年級（小一至中六）的算術題才能關掉，防止賴床。純前端、中英雙語。',
    descEn:
      'Hong Kong math-themed alarm: you must solve grade-level arithmetic (P1–F.6) to turn it off — no more snoozing. Front-end only, bilingual.',
    color: '#ffd83d',
  },
  {
    name: '資料分析工具',
    nameEn: 'Data Analyzer',
    tech: 'DATA',
    url: 'https://github.com/QWQFuLan/LightAnalyzer',
    desc: '上傳 Excel / CSV 即時計算平均、中位數、標準差等統計指標，一鍵匯出 PDF 報告。純前端、三語介面。',
    descEn:
      'Upload Excel / CSV and instantly compute mean, median, std-dev and more; export a PDF report in one click. Front-end only, trilingual UI.',
    color: '#6bb5ff',
  },
  {
    name: 'DSE 個人網站',
    nameEn: 'DSE Personal Site',
    tech: 'WEB',
    url: 'https://github.com/QWQFuLan/SBA-WEBS',
    desc: '為 DSE 製作的多頁靜態個人網站：考試倒數、個人資料、過往經歷與獎狀等頁面，原生 HTML / CSS / JS。',
    descEn:
      'Multi-page static personal site for DSE: exam countdown, profile, past experience and certificates. Built with vanilla HTML / CSS / JS.',
    color: '#5dba4a',
  },
];

export interface Skill {
  id: string;
  badge: string;
  name: string;
  nameEn: string;
  color: string;
  tagline: string;
  taglineEn: string;
  detail: string;
  detailEn: string;
  progress: number;
}

export const SKILLS: Skill[] = [
  {
    id: 'cpp',
    badge: 'C++',
    name: 'C++',
    nameEn: 'C++',
    color: '#5dba4a',
    tagline: '指標 · 類別 · 物件',
    taglineEn: 'Pointers · Classes · Objects',
    detail: '正在學習 C++ 的指標、類別與物件，並用它練習寫程式。',
    detailEn:
      'Learning pointers, classes and objects — practicing programming with C++.',
    progress: 2,
  },
  {
    id: 'python',
    badge: 'Py',
    name: 'Python',
    nameEn: 'Python',
    color: '#6bb5ff',
    tagline: '語法簡潔 · 用途廣泛',
    taglineEn: 'Clean syntax · Versatile',
    detail: '正在學習 Python 的基礎語法、函式與模組、資料處理，嘗試用它寫小工具解決日常問題。',
    detailEn:
      'Learning Python basics, functions, modules and data processing — writing small tools to solve everyday problems.',
    progress: 2,
  },
  {
    id: 'database',
    badge: 'DB',
    name: 'Database',
    nameEn: 'Database',
    color: '#ffd83d',
    tagline: 'SQL · 資料表設計',
    taglineEn: 'SQL · Schema design',
    detail: '正在學習 SQL 與關聯式資料庫，練習設計資料表、外鍵關聯、查詢與統計分析。',
    detailEn:
      'Learning SQL and relational databases — designing tables, foreign keys, queries and analytics.',
    progress: 3,
  },
  {
    id: 'html',
    badge: '<>',
    name: 'HTML',
    nameEn: 'HTML/CSS',
    color: '#ff6b6b',
    tagline: '網頁標記 · 樣式',
    taglineEn: 'Markup & styling',
    detail: '正在學習 HTML 與 CSS，用語義化標籤與像素風樣式，並用 AI 輔助把這個網站做出來。',
    detailEn:
      'Learning HTML & CSS — building this very site with AI assistance, using semantic markup and pixel styling.',
    progress: 2,
  },
  {
    id: 'ai',
    badge: 'AI',
    name: 'AI 工具',
    nameEn: 'AI Tools',
    color: '#a78bfa',
    tagline: '探索 API · Codex · 應用',
    taglineEn: 'API exploration · Codex · Apps',
    detail: '正在用 AI 輔助開發：探索各種 API、用 Codex 寫程式，把 AI 應用到小專案裡。',
    detailEn:
      'Building with AI assistance — exploring APIs, using Codex for code, and applying AI in small projects.',
    progress: 2,
  },
  {
    id: 'learning',
    badge: '?',
    name: '正在學習',
    nameEn: 'Learning',
    color: '#ff9f6e',
    tagline: '今天也要進步一點點',
    taglineEn: 'One block every day',
    detail: '學習中：網頁開發與更多程式語言。',
    detailEn:
      'Currently learning web development and more languages.',
    progress: 1,
  },
];

export const STR = {
  zh: {
    nav: ['首頁', '關於我', '作品集', '技能', '聯絡我'],
    heroTagline: '正在學習編程。用一個一個方塊，慢慢建造屬於自己的世界。',
    seeWorks: 'See Works',
    contactMe: '聯絡我',
    aboutChip: 'ABOUT · 關於我',
    aboutLine1: '我是 FULAN，正在學習編程。',
    aboutLine2:
      '我喜歡 我的世界（Minecraft），所以把這個網站做成了像素風。目前正在學習 C++、Python 和資料庫，目標是用程式把腦海裡的想法，像在遊戲裡堆方塊一樣，一塊一塊建造出來。',
    tags: ['正在學習編程', '像素愛好者', 'Minecraft 玩家', 'APEX 玩家'],
    timelineChip: '學習旅程',
    timeline: [
      { year: '2022', text: '選修 ICT，慢慢認識 Python、HTML/CSS 與資料庫' },
      { year: '2022', text: '加入 STEAM Team，玩一些簡單的 LEGO Robot' },
      { year: '2023', text: '加入 VEX Team，上網尋找資料，完善機器人的功能' },
      { year: '2023 · 12月', text: '去台灣比賽，拿到「建造獎」' },
      { year: '2025', text: '進入 Asso，學習 C++' },
      { year: '2026 · 暑假', text: '用 AI 輔助建立個人網站和一些小玩意，自學網站部署，並部署了第一個網站' },
      { year: '2026 · 9月', text: '學習進階的資料庫' },
    ],
    portfolioChip: 'PORTFOLIO · 作品集',
    portfolioTitle: '我的方塊世界',
    portfolioSub: '一些親手蓋出來的小作品。點擊卡片會直接打開對應的 GitHub 倉庫。',
    portfolioHint: '點擊卡片前往 GitHub · 拖曳切換',
    skillsChip: 'SKILLS · 技能',
    skillsTitle: '技能卡片 · 點擊翻面',
    skillsSub: '每一張卡片都可以翻過來，看看我正在學什麼。',
    contactChip: 'CONTACT · 聯絡我',
    contactTitle: '一起建造點什麼吧',
    contactSub: '想聊聊程式、Minecraft，APEX，或是任何有趣的想法，都可以透過下面方式找到我。',
    emailBtn: 'Email 聯絡',
    footerLine: '以像素建造 · 用程式思考 · 靈感來自 Minecraft',
  },
  en: {
    nav: ['Home', 'About', 'Work', 'Skills', 'Contact'],
    heroTagline: 'Learning to code. Building my own world, one block at a time.',
    seeWorks: 'See Works',
    contactMe: 'Contact',
    aboutChip: 'ABOUT',
    aboutLine1: "I'm FULAN, learning to code.",
    aboutLine2:
      'I love Minecraft, so this site is pixel-styled. I am currently learning C++, Python and databases — turning ideas into reality block by block, just like in the game.',
    tags: ['Learning to code', 'Pixel Art Fan', 'Minecraft Player', 'APEX Gamer'],
    timelineChip: 'MY JOURNEY',
    timeline: [
      { year: '2022', text: 'Took ICT as an elective — slowly learning Python, HTML/CSS and databases' },
      { year: '2022', text: 'Joined the STEAM Team, playing with simple LEGO robots' },
      { year: '2023', text: 'Joined the VEX Team, researching online to improve the robots' },
      { year: 'Dec 2023', text: 'Went to Taiwan for a competition and won the Build Award' },
      { year: '2025', text: 'Started Asso — learning C++' },
      { year: 'Summer 2026', text: 'Built a personal website and small projects with AI assistance; self-taught deployment and launched the first site' },
      { year: 'Sep 2026', text: 'Started learning advanced databases' },
    ],
    portfolioChip: 'PORTFOLIO',
    portfolioTitle: 'My Block World',
    portfolioSub: "Small projects I've built by hand. Click a card to open its GitHub repo.",
    portfolioHint: 'Click a card to open GitHub · Drag to switch',
    skillsChip: 'SKILLS',
    skillsTitle: 'Skills · Click to flip',
    skillsSub: 'Flip each card to see what I am learning.',
    contactChip: 'CONTACT',
    contactTitle: "Let's build something",
    contactSub: 'Want to chat about code, Minecraft, APEX, or anything fun? Reach me below.',
    emailBtn: 'Email Me',
    footerLine: 'Built with pixels · Thinking in code · Inspired by Minecraft',
  },
} as const;
