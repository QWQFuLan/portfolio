export const GITHUB_URL = 'https://github.com/QWQFuLan';
// TODO: 交付前替换成你自己的邮箱
export const EMAIL = 'hello@fulan.dev';

export interface Project {
  name: string;
  tech: string;
  url: string;
  desc: string;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    name: '算術鬧鐘',
    tech: 'JS',
    url: 'https://github.com/QWQFuLan/Arithmetic-Alarm-Clock',
    desc: '香港數學課程主題鬧鐘：響鈴時必須解出對應年級（小一至中六）的算術題才能關掉，防止賴床。純前端、中英雙語。',
    color: '#ffd83d',
  },
  {
    name: '資料分析工具',
    tech: 'DATA',
    url: 'https://github.com/QWQFuLan/LightAnalyzer',
    desc: '上傳 Excel / CSV 即時計算平均、中位數、標準差等統計指標，一鍵匯出 PDF 報告。純前端、三語介面。',
    color: '#6bb5ff',
  },
  {
    name: 'DSE 個人網站',
    tech: 'WEB',
    url: 'https://github.com/QWQFuLan/SBA-WEBS',
    desc: '為 DSE 製作的多頁靜態個人網站：考試倒數、個人資料、過往經歷與獎狀等頁面，原生 HTML / CSS / JS。',
    color: '#5dba4a',
  },
];

export interface Skill {
  id: string;
  badge: string;
  name: string;
  color: string;
  tagline: string;
  detail: string;
  progress: number;
}

export const SKILLS: Skill[] = [
  {
    id: 'cpp',
    badge: 'C++',
    name: 'C++',
    color: '#5dba4a',
    tagline: '指標 · 類別 · STL',
    detail: '正在學習 C++ 的指標、類別與物件、標準模板庫（STL），並用它練習資料結構與演算法。',
    progress: 3,
  },
  {
    id: 'python',
    badge: 'Py',
    name: 'Python',
    color: '#6bb5ff',
    tagline: '語法簡潔 · 用途廣泛',
    detail: '正在學習 Python 的基礎語法、函式與模組、資料處理，嘗試用它寫小工具解決日常問題。',
    progress: 3,
  },
  {
    id: 'database',
    badge: 'DB',
    name: 'Database',
    color: '#ffd83d',
    tagline: 'SQL · 資料表設計',
    detail: '正在學習 SQL 與關聯式資料庫，練習設計資料表、外鍵關聯、查詢與統計分析。',
    progress: 2,
  },
  {
    id: 'learning',
    badge: '?',
    name: '正在學習',
    color: '#ff9f6e',
    tagline: '今天也要進步一點點',
    detail: '學習中：網頁開發、演算法與更多程式語言。每天建造一點點，像在 Minecraft 裡慢慢蓋出城堡。',
    progress: 1,
  },
];
