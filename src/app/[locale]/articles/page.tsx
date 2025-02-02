import { Metadata, NextPage } from 'next';
import Link from 'next/link';

import { getArticles } from '@/libs/newt';

export const metadata: Metadata = {
  title: 'Newt ブログ',
  description: 'NewtとNext.jsを使用したブログです',
};

const Articles: NextPage = async () => {
  const articles = await getArticles();

  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article._id} className="text-white">
              <Link href={`articles/${article.slug}`}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
