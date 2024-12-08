import React from 'react';

export const useTranslations = () => {
  return (key: string) => {
    // キーをそのまま返す、またはテスト用の固定文字列を返す
    return `translated.${key}`;
  };
};

export const NextIntlClientProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
