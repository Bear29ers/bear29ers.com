import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { MotionGlobalConfig } from 'framer-motion';

import type { Media } from '@/types/media';

import Carousel from './Carousel';

import type { RenderResult } from '@testing-library/react';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} />;
});

describe('src/components/ui/gallery/Carousel/Carousel.test.tsx', () => {
  MotionGlobalConfig.skipAnimations = true;
  const mockMedia: Media = {
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

  const mockSetIndex = jest.fn();
  const mockSetTouchPosition = jest.fn();

  describe('when index props is 0', () => {
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={0}
          touchPosition={0}
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the carousel with images', () => {
      expect(screen.getAllByRole('img')).toHaveLength(3);
    });

    it('should show next button when not on last image', () => {
      expect(screen.getByRole('button', { name: /chevron-right/i })).toBeInTheDocument();
    });

    it('should hide previous button when on first image', () => {
      expect(screen.queryByRole('button', { name: /chevron-left/i })).not.toBeInTheDocument();
    });

    it('should call setIndex when next button is clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: /chevron-right/i }));
      expect(mockSetIndex).toHaveBeenCalledWith(1);
    });

    it('should handle right arrow key press', () => {
      fireEvent.keyDown(document, { key: 'ArrowRight' });
      expect(mockSetIndex).toHaveBeenCalledWith(1);
    });

    it('should handle touch start event', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      expect(carouselWrapper).toBeInTheDocument();
      fireEvent.touchStart(carouselWrapper, { touches: [{ clientX: 500 }] });
      expect(mockSetTouchPosition).toHaveBeenCalledWith(500);
    });

    it('should handle touch move event to go to next image', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      expect(carouselWrapper).toBeInTheDocument();
      fireEvent.touchStart(carouselWrapper, { touches: [{ clientX: 500 }] });
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 400 }] });
      expect(mockSetIndex).toHaveBeenCalledWith(1);
    });
  });

  describe('when index props is more than 1', () => {
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={1}
          touchPosition={0}
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should call setIndex when previous button is clicked', () => {
      fireEvent.click(screen.getByRole('button', { name: /chevron-left/i }));
      expect(mockSetIndex).toHaveBeenCalledWith(0);
    });

    it('should handle left arrow key press', () => {
      fireEvent.keyDown(document, { key: 'ArrowLeft' });
      expect(mockSetIndex).toHaveBeenCalledWith(0);
    });

    it('should handle touch move event to go to previous image', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      expect(carouselWrapper).toBeInTheDocument();
      fireEvent.touchStart(carouselWrapper, { touches: [{ clientX: 500 }] });
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 600 }] });
      expect(mockSetIndex).toHaveBeenCalledWith(0);
    });
  });
});
