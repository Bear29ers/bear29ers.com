import AnimatedGallery from './AnimatedGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimatedGallery> = {
  component: AnimatedGallery,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AnimatedGallery>;

export const Default: Story = {
  args: {
    layoutId: '18033720356079349',
    imageSrc:
      'https://scontent-nrt1-2.cdninstagram.com/v/t51.29350-15/451166443_3808549426099080_1051796540578757172_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=22N_GcDEHNUQ7kNvgHy1CEW&_nc_ht=scontent-nrt1-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=00_AYBawbjA6Dj69kvaPcSE-yGzXh5yTx_D9L-Nfug_KovZkA&oe=669A9924',
    zIndex: 'z-[1]',
    maxWidth: 'max-w-72',
    setState: () => {},
  },
  render: ({ layoutId, imageSrc, zIndex, maxWidth, setState }) => {
    return (
      <AnimatedGallery
        layoutId={layoutId}
        imageSrc={imageSrc}
        zIndex={zIndex}
        maxWidth={maxWidth}
        setState={setState}
      />
    );
  },
};
