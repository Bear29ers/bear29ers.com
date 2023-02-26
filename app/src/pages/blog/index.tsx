import { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import { client } from '@/libs/client';
import styles from '@/styles/blog/Index.module.scss';
import { Blog, MicrocmsResponse, Tag } from '@/types/blog';

// Props type
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// Home component
const Home: NextPage<Props> = ({ blogs, tags }: Props) => {
  return (
    <main className={styles.blog_index}>
      <div className={styles.blog_index_container}>
        <div className='flex h-full'>
          <div className='w-8/12 bg-emerald-200'>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-4/12 bg-amber-200'>2</div>
        </div>
      </div>
    </main>
  );
};

// Request microCMS API
export const getStaticProps = async () => {
  const blog: MicrocmsResponse<Blog> = await client.get({ endpoint: 'blog' });
  const tag: MicrocmsResponse<Tag> = await client.get({ endpoint: 'tag' });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

export default Home;
