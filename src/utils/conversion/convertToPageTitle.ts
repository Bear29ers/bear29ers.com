const convertToPageTitle = (pathname: string): string => {
  // パスがスラッシュのみ（ホーム）の場合は 'Home | ' を返す
  if (pathname === '/') {
    return '';
  }

  // パスの先頭のスラッシュを除去し、最初の文字を大文字に変換
  const trimmedPath = pathname.slice(1);
  const capitalizedPath = trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);

  return `${capitalizedPath} | `;
};

export default convertToPageTitle;
