import FanningImages from './FanningImages';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FanningImages> = {
  component: FanningImages,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FanningImages>;

export const Default: Story = {
  args: {
    mediaList: [
      {
        caption:
          '.\n…\nメリーゴーランド。\n静寂の夜、光の帳が織りなす回転木馬の幻想。\n…\nMerry-go-round.\nOn a silent night, a curtain of light creates the illusion of a carousel.\n——\n📷 Ricoh GRⅢ HDF\n🎨 Lightroom Mobile\n——\n\n#photograghy #landscape \n#streetphotography #streetgrammer #streetsnap\n#ricoh #ricohgr3 #ricoh_gr_photography \n#gr3 #griii #gr3hdf #griiihdf\n#grsnaps #grist #shootgr #gr_meet_japan\n#lightroommobile #lightroom\n#instagramjapan #reco_jp #igersjp',
        children: {
          data: [
            {
              mediaUrl:
                'https://scontent-nrt1-2.cdninstagram.com/v/t51.29350-15/451166443_3808549426099080_1051796540578757172_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=22N_GcDEHNUQ7kNvgHy1CEW&_nc_ht=scontent-nrt1-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=00_AYBawbjA6Dj69kvaPcSE-yGzXh5yTx_D9L-Nfug_KovZkA&oe=669A9924',
              id: '18274358392235025',
            },
          ],
        },
        mediaUrl: '/images/example/image-1.jpg',
        permalink: 'https://www.instagram.com/p/C9bfg4vyXNx/',
        likeCount: 0,
        timestamp: '2024-07-15T04:15:00+0000',
        username: 'bear29ers',
        id: '18033720356079349',
      },
      {
        caption:
          '.\n…\nバラのライトアップ。\n2000品種100万本のバラがライトアップによって幻想的になっていた。\n…\nIlluminated roses.\nThe 1 million roses of 2,000 varieties were lit up, creating a magical atmosphere.\n——\n📷 Ricoh GRⅢ HDF\n🎨 Lightroom Mobile\n——\n\n#photograghy #landscape \n#streetphotography #streetgrammer #streetsnap\n#ricoh #ricohgr3 #ricoh_gr_photography \n#gr3 #griii #gr3hdf #griiihdf\n#grsnaps #grist #shootgr #gr_meet_japan\n#lightroommobile #lightroom\n#instagramjapan #reco_jp #igersjp',
        children: {
          data: [
            {
              mediaUrl:
                'https://scontent-nrt1-2.cdninstagram.com/v/t51.29350-15/450845581_2744944942337393_4641788592330974644_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=i7DLyun3MtwQ7kNvgHGZeBl&_nc_ht=scontent-nrt1-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=00_AYCP7wCwVcgmz7jPaF0ChU0JO5clLV9fqEEyPRugJ-CO6A&oe=669AA615',
              id: '18069568834552984',
            },
          ],
        },
        mediaUrl: '/images/example/image-2.jpg',
        permalink: 'https://www.instagram.com/p/C9WsRqbyk4Y/',
        likeCount: 3,
        timestamp: '2024-07-13T07:30:00+0000',
        username: 'bear29ers',
        id: '18019811789347112',
      },
    ],
    maxWidth: 'max-w-72',
    initialY: 220,
    styles: [
      {
        x: '-60%',
        y: 0,
        rotate: -5,
      },
      {
        x: '-40%',
        y: 0,
        rotate: 5,
      },
    ],
    setState: () => {},
  },
  render: ({ mediaList, maxWidth, initialY, styles, setState }) => {
    return (
      <FanningImages
        mediaList={mediaList}
        maxWidth={maxWidth}
        initialY={initialY}
        styles={styles}
        setState={setState}
      />
    );
  },
};
