import GridGallery from './GridGallery';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridGallery> = {
  component: GridGallery,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GridGallery>;

export const Default: Story = {
  args: {
    imageInfoList: [
      { class: 'col-span-2 xs:col-span-1 xs:row-span-2', src: 'https://www.instagram.com/p/BTNoXdplt68/' },
      { class: 'xsm:col-span-2 md:col-span-1', src: 'https://www.instagram.com/p/BWFraFrFsh-/' },
      { class: 'md:col-span-2', src: 'https://www.instagram.com/p/BS_NXzYFZbl/' },
      { class: 'col-span-2 xsm:col-span-1', src: 'https://www.instagram.com/p/BVDcF-dliQR/' },
      { class: 'col-span-2 xsm:col-span-1', src: 'https://www.instagram.com/p/BWJKs3blCJN/' },
      { class: 'md:row-span-2', src: 'https://www.instagram.com/p/BUh46wWFV4Y/' },
      { class: 'xs:row-span-2 md:col-span-2 md:row-span-1', src: 'https://www.instagram.com/p/BXzJw-zFnNO/' },
      {
        class: 'col-span-2 xs:col-span-1 xsm:col-span-2 md:col-span-1',
        src: 'https://www.instagram.com/p/BeiqY7HBYaN/',
      },
    ],
  },
  render: ({ imageInfoList }) => {
    return <GridGallery imageInfoList={imageInfoList} />;
  },
};
