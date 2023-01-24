import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { client } from '@/libs/client';
import { Blog, MicrocmsResponse } from '@/types/blog';

// type Props
type Props = {
  blog: Blog;
};

// BlogId Component
const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }: Props) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <ul>
        {blog.tags.map((tag) => (
          <li key={tag.id}>#{tag.tag}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
    </main>
  );
};

// Request microCMS API
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const contentId = id instanceof Array ? id[0] : id;
  const data: Blog = await client.get({ endpoint: 'blog', contentId });

  return {
    props: {
      blog: data,
    },
  };
};

// Paths for blog detail page
export const getStaticPaths: GetStaticPaths = async () => {
  const data: MicrocmsResponse<Blog> = await client.get({ endpoint: 'blog' });

  const paths: string[] = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export default BlogId;
