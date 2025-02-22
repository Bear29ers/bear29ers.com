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

  return <ArticleClient article={article} />;
};

export default Article;
