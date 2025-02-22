'use client';

import type { FC } from 'react';

import { useAtom } from 'jotai';

import ArticleDate from '@/components/ui/articles/ArticleDate/ArticleDate';
import ArticleProfile from '@/components/ui/articles/ArticleProfile/ArticleProfile';

import getFormattedDate from '@/utils/getFormattedDate';

import { themeColor } from '@/state/colors';
import type { Article } from '@/types/article';

interface Props {
  article: Article;
}

const ArticleClient: FC<Props> = ({ article }) => {
  const [selectedThemeColor, _] = useAtom(themeColor);

  const formattedCreatedAt = getFormattedDate(new Date(article._sys.createdAt));
  const formattedUpdatedAt = getFormattedDate(new Date(article._sys.updatedAt));

  return (
    <main className="relative size-full overscroll-y-none bg-dark bg-auto bg-center bg-repeat font-murecho tracking-wider flex-center txs:bg-noise-pattern">
      <div className="mt-32 w-full max-w-6xl rounded-2xl bg-white px-32 py-20 shadow-2xl">
        <ArticleDate createdAt={formattedCreatedAt} updatedAt={formattedUpdatedAt} />
        <h1 className="mb-6 mt-4 text-3xl font-bold">{article.title}</h1>
        <ArticleProfile author={article.author} themeColor={selectedThemeColor} />
        <hr className="my-8" />
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </div>
    </main>
  );
};

export default ArticleClient;
