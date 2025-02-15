import Caption from './Caption';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Caption> = {
  component: Caption,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    media: {
      caption:
        '.\n…\nメリーゴーランド。\n静寂の夜、光の帳が織りなす回転木馬の幻想。\n…\nMerry-go-round.\nOn a silent night, a curtain of light creates the illusion of a carousel.\n——\n📷 Ricoh GRⅢ HDF\n🎨 Lightroom Mobile\n——\n\n#photograghy #landscape \n#streetphotography #streetgrammer #streetsnap\n#ricoh #ricohgr3 #ricoh_gr_photography \n#gr3 #griii #gr3hdf #griiihdf\n#grsnaps #grist #shootgr #gr_meet_japan\n#lightroommobile #lightroom\n#instagramjapan #reco_jp #igersjp',
      children: {
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
      mediaUrl: 'images/example/image-1.jpg',
      mediaType: 'CAROUSEL_ALBUM',
      permalink: 'https://www.instagram.com/p/C9bfg4vyXNx/',
      likeCount: 0,
      timestamp: '2024-07-15T04:15:00+0000',
      username: 'bear29ers',
      id: '18033720356079349',
    },
    href: 'https://www.instagram.com/bear29ers/',
    alt: 'bear29ers',
    index: 0,
    themeColor: 'Red',
  },
  render: ({ media, href, alt, index, themeColor }) => {
    return (
      <div className="w-full max-w-[400px]">
        <Caption media={media} href={href} alt={alt} index={index} themeColor={themeColor} />;
      </div>
    );
  },
};
