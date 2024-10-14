import { useState, type FC } from 'react';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryModalClient: FC<Props> = ({ media }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <h1 className="bg-white p-4 text-3xl">gallery modal</h1>;
};

export default GalleryModalClient;
