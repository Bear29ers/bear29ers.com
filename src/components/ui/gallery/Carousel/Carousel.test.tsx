import '@testing-library/jest-dom';

import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { MotionGlobalConfig } from 'motion/react';

import type { Media } from '@/types/media';

import Carousel from './Carousel';

import type { RenderResult } from '@testing-library/react';

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
          id: '18274358392235026',
        },
        {
          mediaUrl: 'images/example/image-3.jpg',
          id: '18274358392235027',
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when index props is 0', () => {
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={0}
          touchPosition={500} // Set a valid touch position
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
      fireEvent.touchStart(carouselWrapper, { touches: [{ clientX: 600 }] });
      expect(mockSetTouchPosition).toHaveBeenCalledWith(600);
    });

    it('should handle touch move event to go to next image', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      expect(carouselWrapper).toBeInTheDocument();
      // Don't call touchStart since we set touchPosition={500} in beforeEach
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 494 }] }); // diff = 6 > 5
      expect(mockSetIndex).toHaveBeenCalledWith(1);
    });

    // New tests for uncovered branches
    it('should handle touch start with undefined clientX', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      // Create a mock touch event with undefined clientX
      const mockTouchEvent = {
        touches: [{}], // clientX is undefined
      };
      fireEvent.touchStart(carouselWrapper, mockTouchEvent);
      expect(mockSetTouchPosition).toHaveBeenCalledWith(null);
    });

    it('should handle touch move when touchPosition is null', () => {
      renderResult.unmount();
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={0}
          touchPosition={null} // Set touchPosition to null
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );

      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 400 }] });
      // Should not call setIndex when touchPosition is null
      expect(mockSetIndex).not.toHaveBeenCalled();
      expect(mockSetTouchPosition).not.toHaveBeenCalledWith(null);
    });

    it('should handle touch move with undefined currentTouch', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      fireEvent.touchStart(carouselWrapper, { touches: [{ clientX: 500 }] });

      // Create a mock touch move event with undefined clientX
      const mockTouchMoveEvent = {
        touches: [{}], // clientX is undefined
      };
      fireEvent.touchMove(carouselWrapper, mockTouchMoveEvent);
      // Should not call setIndex when currentTouch is undefined
      expect(mockSetIndex).not.toHaveBeenCalled();
      expect(mockSetTouchPosition).not.toHaveBeenCalledWith(null);
    });
  });

  describe('when index props is more than 1', () => {
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={1}
          touchPosition={500} // Set a valid touch position
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
      // Don't call touchStart since we set touchPosition={500} in beforeEach
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 506 }] }); // diff = -6 < -5
      expect(mockSetIndex).toHaveBeenCalledWith(0);
    });

    // New test for forward swipe (diff > 5) - this was not covered
    it('should handle touch move event to go to next image when swiping left', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      // Don't call touchStart since we set touchPosition={500} in beforeEach
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 494 }] }); // diff = 6 > 5
      expect(mockSetIndex).toHaveBeenCalledWith(2);
    });
  });

  describe('when on last image', () => {
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={2} // Last image (index 2 for 3 images)
          touchPosition={0}
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should hide next button when on last image', () => {
      expect(screen.queryByRole('button', { name: /chevron-right/i })).not.toBeInTheDocument();
    });

    it('should show previous button when on last image', () => {
      expect(screen.getByRole('button', { name: /chevron-left/i })).toBeInTheDocument();
    });

    it('should not go to next image when swiping left on last image', () => {
      // Test with explicit values
      const testMedia = {
        ...mockMedia,
        children: {
          data: [
            { mediaUrl: 'images/example/image-1.jpg', id: '1' },
            { mediaUrl: 'images/example/image-2.jpg', id: '2' },
            { mediaUrl: 'images/example/image-3.jpg', id: '3' },
          ],
        },
      };

      // Create a fresh render for this specific test
      renderResult.unmount();
      renderResult = render(
        <Carousel
          media={testMedia}
          index={2} // Last image (index 2 of 3 images)
          touchPosition={500}
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );

      const carouselWrapper = screen.getByTestId('carousel-wrapper');

      // Clear any previous calls
      jest.clearAllMocks();

      // Swipe left (diff = 500 - 494 = 6 > 5) - should NOT trigger next image
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 494 }] });

      // Verify: index=2, media.children.data.length=3, so index < length-1 is 2 < 2 = false
      // Therefore, the first condition should fail and setIndex should not be called
      expect(mockSetIndex).not.toHaveBeenCalled();
      expect(mockSetTouchPosition).toHaveBeenCalledWith(null);
    });

    it('should go to previous image when swiping right on last image', () => {
      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      // Don't call touchStart since we set touchPosition={500} in beforeEach
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 506 }] }); // diff = -6 < -5
      expect(mockSetIndex).toHaveBeenCalledWith(1);
    });

    it('should not go to next image when pressing right arrow on last image', () => {
      fireEvent.keyDown(document, { key: 'ArrowRight' });
      expect(mockSetIndex).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    let renderResult: RenderResult;

    it('should handle small touch movements (diff <= 5 and diff >= -5)', () => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={1}
          touchPosition={500} // Set a valid touch position
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );

      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      // Don't call touchStart since we set touchPosition={500} in render
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 497 }] }); // diff = 3, should not trigger setIndex
      expect(mockSetIndex).not.toHaveBeenCalled();
      expect(mockSetTouchPosition).toHaveBeenCalledWith(null);

      renderResult.unmount();
    });

    it('should handle complete touch sequence (start + move)', () => {
      // Use a custom component wrapper to simulate the complete touch flow
      const TestWrapper = () => {
        const [index, setIndex] = React.useState(1);
        const [touchPosition, setTouchPosition] = React.useState<number | null>(null);

        return (
          <Carousel
            media={mockMedia}
            index={index}
            touchPosition={touchPosition}
            setIndex={(newIndex) => {
              setIndex(newIndex);
              mockSetIndex(newIndex);
            }}
            setTouchPosition={(pos) => {
              setTouchPosition(pos);
              mockSetTouchPosition(pos);
            }}
          />
        );
      };

      renderResult = render(<TestWrapper />);

      const carouselWrapper = screen.getByTestId('carousel-wrapper');

      // Clear previous calls
      jest.clearAllMocks();

      // Simulate complete touch sequence
      fireEvent.touchStart(carouselWrapper, { touches: [{ clientX: 500 }] });
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 494 }] }); // diff = 6 > 5

      // Should move to next image (index 1 -> 2)
      expect(mockSetIndex).toHaveBeenCalledWith(2);

      renderResult.unmount();
    });

    it('should handle other keyboard keys without action', () => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={1}
          touchPosition={null}
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );

      fireEvent.keyDown(document, { key: 'Enter' });
      fireEvent.keyDown(document, { key: 'Space' });
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(mockSetIndex).not.toHaveBeenCalled();

      renderResult.unmount();
    });

    it('should not go to previous image when swiping right on first image', () => {
      renderResult = render(
        <Carousel
          media={mockMedia}
          index={0}
          touchPosition={500} // Set a valid touch position
          setIndex={mockSetIndex}
          setTouchPosition={mockSetTouchPosition}
        />
      );

      const carouselWrapper = screen.getByTestId('carousel-wrapper');
      // Don't call touchStart since we set touchPosition={500} in render
      fireEvent.touchMove(carouselWrapper, { touches: [{ clientX: 506 }] }); // diff = -6 < -5
      // Should not call setIndex because we're on the first image
      expect(mockSetIndex).not.toHaveBeenCalled();
      // But setTouchPosition should still be called with null
      expect(mockSetTouchPosition).toHaveBeenCalledWith(null);

      renderResult.unmount();
    });
  });
});
