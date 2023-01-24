import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import { client } from '@/libs/client';
import { Blog, MicrocmsResponse, Tag } from '@/types/blog';

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
export const getStaticProps: GetStaticProps = async () => {
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
