import MainGallery from './MainGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainGallery> = {
  component: MainGallery,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MainGallery>;

export const Default: Story = {
  args: { imageSrc: '/images/example/image-4.jpg', id: '17924112776916166', width: 288, maxWidth: 'max-w-72' },
  render: ({ imageSrc, id, width, maxWidth }) => {
    return <MainGallery imageSrc={imageSrc} id={id} width={width} maxWidth={maxWidth} />;
  },
};
