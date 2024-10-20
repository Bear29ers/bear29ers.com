import AnimatedGallery from './AnimatedGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedGallery> = {
  component: AnimatedGallery,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AnimatedGallery>;

export const Default: Story = {
  args: {
    layoutId: '18033720356079349',
    imageSrc: '/images/example/image-1.jpg',
    maxWidth: 'max-w-72',
    setState: () => {},
  },
  render: ({ layoutId, imageSrc, maxWidth, setState }) => {
    return <AnimatedGallery layoutId={layoutId} imageSrc={imageSrc} maxWidth={maxWidth} setState={setState} />;
  },
};
