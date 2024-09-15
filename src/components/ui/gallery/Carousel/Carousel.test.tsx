/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Carousel from './Carousel';

import type { motion } from 'framer-motion';

// Framer Motionの型定義
type MotionProps = React.ComponentProps<typeof motion.div>;

// Framer Motionのモック
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: (props: React.PropsWithChildren<MotionProps>) => <div {...props} />,
      button: (props: React.PropsWithChildren<MotionProps>) => <button {...props} />,
    },
    AnimatePresence: ({ children }: React.PropsWithChildren<object>) => <>{children}</>,
    MotionConfig: ({ children }: React.PropsWithChildren<object>) => <>{children}</>,
    useSpring: jest.fn(() => ({ set: jest.fn() })),
    useMotionTemplate: jest.fn((template: TemplateStringsArray, ..._args: unknown[]) => template.raw[0]),
  };
});

// Next/Imageのモック
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    fill,
    sizes,
    className,
    ...props
  }: {
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    className?: string;
  }) => {
    // Apply styles if `fill` is true
    const fillStyle = fill
      ? { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover' as const }
      : {};

    // Return a basic image tag
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} sizes={sizes} className={className} style={fillStyle} {...props} />
    );
  },
}));

describe('Carousel', () => {
  const mockMedia = {
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
      ],
    },
    mediaUrl: 'images/example/image-1.jpg',
    mediaType: 'CAROUSEL_ALBUM',
    permalink: 'https://www.instagram.com/p/C9bfg4vyXNx/',
    likeCount: 0,
    timestamp: '2024-07-15T04:15:00+0000',
    username: 'bear29ers',
    id: '18033720356079349',
  };

  it('renders the carousel with images', () => {
    render(<Carousel media={mockMedia} />);
    expect(screen.getAllByRole('img')).toHaveLength(6);
  });
});
