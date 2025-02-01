import { Metadata } from 'next/types';

import { getArticleBySlug, getArticles } from '@/libs/newt';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () => {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
};
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  };
}

const Article = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return;

  return (
    <main className="text-white">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
    </main>
  );
};

export default Article;
