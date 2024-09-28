import Thumbnails from './Thumbnails';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Thumbnails> = {
  component: Thumbnails,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Thumbnails>;

export const Default: Story = {
  args: {
    images: {
      data: [
        {
          mediaUrl: 'images/example/image-1.jpg',
          id: '18274358392235025',
        },
        {
          mediaUrl: 'images/example/image-2.jpg',
          id: '18274358392235025',
        },
        {
          mediaUrl: 'images/example/image-3.jpg',
          id: '18274358392235025',
        },
        {
          mediaUrl: 'images/example/image-4.jpg',
          id: '18274358392235025',
        },
        {
          mediaUrl: 'images/example/image-5.jpg',
          id: '18274358392235025',
        },
      ],
    },
    index: 0,
    setIndex: () => {},
  },
  render: ({ images, index, setIndex }) => {
    return <Thumbnails images={images} index={index} setIndex={setIndex} />;
  },
};
