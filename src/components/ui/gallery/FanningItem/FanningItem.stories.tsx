import FanningItem from './FanningItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FanningItem> = {
  component: FanningItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FanningItem>;

export const Default: Story = {
  args: {
    imageSrc: '/images/example/image-3.jpg',
    layoutId: '17924112776916166',
    styles: {
      x: '-60%',
      y: 0,
      rotate: -5,
    },
    zIndex: 'z-[3]',
    maxWidth: 'max-w-72',
    initialY: 220,
  },
  render: ({ imageSrc, layoutId, styles, zIndex, maxWidth, initialY }) => {
    return (
      <FanningItem
        imageSrc={imageSrc}
        layoutId={layoutId}
        styles={styles}
        zIndex={zIndex}
        maxWidth={maxWidth}
        initialY={initialY}
      />
    );
  },
};
