import MainVisual from './MainVisual';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainVisual> = {
  component: MainVisual,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MainVisual>;

export const Default: Story = {
  args: {
    imageSrc: '/images/example/image-7.jpg',
    layoutId: '17924112776916166',
    canAnimate: false,
    maxWidth: 'max-w-96',
    setState: () => {},
  },
  render: ({ imageSrc, layoutId, canAnimate, maxWidth, setState }) => {
    return (
      <MainVisual
        imageSrc={imageSrc}
        layoutId={layoutId}
        canAnimate={canAnimate}
        maxWidth={maxWidth}
        setState={setState}
      />
    );
  },
};
