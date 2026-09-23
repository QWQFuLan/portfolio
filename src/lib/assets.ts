const BASE = ((import.meta.env.MIAODA_CLIENT_BASE_PATH as string | undefined) || '').replace(/\/+$/, '') + '/';

/** 拼接静态资源路径（发布后带 base 前缀） */
export function asset(path: string): string {
  return `${BASE}${path.replace(/^\/+/, '')}`;
}
