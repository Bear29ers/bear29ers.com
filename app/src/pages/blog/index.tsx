import { client } from '@/libs/client';
import { Blog, Tag } from '@/types/blog';
import { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

// Props type
type Props = {
  blogs: Blog[];
  tags: Tag[];
};

// Home component
const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs, tags }: Props) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Request microCMS API
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' });
  const tag = await client.get({ endpoint: 'tag' });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

export default Home;
