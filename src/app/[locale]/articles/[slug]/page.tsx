import { Suspense } from 'react';

import Preloader from '@/components/common/Preloader/Preloader';

import { getArticleBySlug, getArticles } from '@/libs/newt';

import ArticleClient from './client';

import type { Metadata } from 'next/types';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () => {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
};
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: `${article?.title} | Bear29ers`,
    description: '投稿詳細ページです',
  };
}

const Article = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return;

  return (
    <Suspense
      fallback={
        <div className="fixed flex h-screen w-full bg-hitGray bg-noise-pattern flex-center">
          <Preloader />
        </div>
      }>
      <ArticleClient article={article} />
    </Suspense>
  );
};

export default Article;
