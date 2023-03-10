import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { client } from '@/libs/client';
import { MicrocmsResponse } from '@/types/common';
import { Meta } from '@/types/meta';

// Props type
type Props = InferGetStaticPropsType<typeof getStaticProps>;

// Home component
const Meta: NextPage<Props> = ({ meta }: Props) => {
  const data: Meta = meta[0];
  return (
    <Head>
      <title>{data.title}</title>
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
    </Head>
  );
};

// Request microCMS API
export const getStaticProps = async () => {
  const meta: MicrocmsResponse<Meta> = await client.get({ endpoint: 'meta' });

  return {
    props: {
      meta: meta.contents,
    },
  };
};

export default Meta;
