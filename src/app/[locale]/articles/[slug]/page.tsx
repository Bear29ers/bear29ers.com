import { Metadata } from 'next/types';

import { getArticleBySlug, getArticles } from '@/libs/newt';

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

  const createdAtData = new Date(article._sys.createdAt);
  const formattedCreatedAt = `${createdAtData.getFullYear()}年${createdAtData.getMonth() + 1}月${createdAtData.getDate()}日`;
  console.log(formattedCreatedAt);

  return (
    <main className="relative size-full overscroll-y-none bg-dark bg-auto bg-center bg-repeat font-murecho tracking-wider flex-center txs:bg-noise-pattern">
      <div className="mt-20 w-full max-w-5xl rounded-2xl bg-white px-24 py-20 shadow-2xl">
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
      </div>
    </main>
  );
};

export default Article;
