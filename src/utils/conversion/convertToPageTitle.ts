const convertToPageTitle = (pathname: string): string => {
  // パスがルートの場合は空文字を返す
  if (pathname === '/' || pathname === '/ja') {
    return '';
  }

  // パスの先頭のスラッシュもしくはロケールを削除する
  const trimmedPath = pathname.startsWith('/ja/') ? pathname.slice(4) : pathname.slice(1);

  // 先頭の文字を大文字に変換する
  const capitalizedPath = trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);

  return `${capitalizedPath} | `;
};

export default convertToPageTitle;
