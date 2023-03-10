import * as cheerio from 'cheerio';
import hljs, { AutoHighlightResult } from 'highlight.js';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';

import { client } from '@/libs/client';
import { Blog, MicrocmsResponse } from '@/types/blog';
import 'highlight.js/styles/atom-one-dark.css';

// Props type
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// BlogId Component
const BlogId: NextPage<Props> = ({ blog, highlightedBody }: Props) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <ul>
        {blog.tags.map((tag) => (
          <li key={tag.id}>#{tag.tag}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: highlightedBody }} />
    </main>
  );
};

// Request microCMS API
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const contentId = id instanceof Array ? id[0] : id;
  const blog: Blog = await client.get({ endpoint: 'blog', contentId });

  // Setting highlight.js & cheerio
  const $ = cheerio.load(blog.body);
  $('pre code').each((_, elm) => {
    const result: AutoHighlightResult = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog,
      highlightedBody: $.html(),
    },
  };
};

// Paths for blog detail page
export const getStaticPaths: GetStaticPaths = async () => {
  const data: MicrocmsResponse<Blog> = await client.get({ endpoint: 'blog' });

  const paths: string[] = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export default BlogId;
