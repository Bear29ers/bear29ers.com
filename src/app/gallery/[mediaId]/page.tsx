import type { NextPage } from 'next';

interface Props {
  params: {
    mediaId: string;
  };
}

const GalleryDetail: NextPage<Props> = ({ params }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <h1>Gallery Detail</h1>
      <h2>{params.mediaId}</h2>
    </div>
  );
};

export default GalleryDetail;
