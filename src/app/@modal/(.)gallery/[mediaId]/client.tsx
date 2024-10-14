'use client';

import { useState, type FC } from 'react';

import Modal from '@/components/common/Modal/Modal';

import type { Media } from '@/types/media';

interface Props {
  media: Media;
}

const GalleryModalClient: FC<Props> = ({ media }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return <Modal isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default GalleryModalClient;
