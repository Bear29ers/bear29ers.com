/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { FC } from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedGallery from './AnimatedGallery';

import type { RenderResult } from '@testing-library/react';

jest.mock('motion/react', () => {
  const ActualReact: typeof React = jest.requireActual('react');

  const MotionImg: FC<{
    src: string;
    onLayoutAnimationComplete?: () => void;
    layout?: boolean | string;
    layoutId?: string;
    [key: string]: any;
  }> = ({ src, onLayoutAnimationComplete, layout, layoutId, ...props }) => {
    ActualReact.useEffect(() => {
      // レイアウトアニメーションの完了をシミュレート
      const timer = setTimeout(() => {
        onLayoutAnimationComplete && onLayoutAnimationComplete();
      }, 0);
      return () => clearTimeout(timer);
    }, [onLayoutAnimationComplete]);

    return (
      <img
        src={src}
        {...props}
        {...(layout ? { 'data-layout': layout.toString() } : {})}
        {...(layoutId ? { 'data-layout-id': layoutId } : {})}
      />
    );
  };

  return {
    motion: {
      img: MotionImg,
    },
  };
});

const routerPushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

describe('src/components/ui/gallery/AnimatedGallery/AnimatedGallery.test.tsx', () => {
  let renderResult: RenderResult;
  const mockProps = {
    layoutId: '1',
    imageSrc: 'image-1.jpg',
    maxWidth: 'max-w-72',
    setState: jest.fn(),
  };

  beforeEach(() => {
    renderResult = render(<AnimatedGallery {...mockProps} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should call setState when animation completes', async () => {
    await waitFor(() => {
      expect(mockProps.setState).toHaveBeenCalled();
    });
  });

  it('should call router.push when the image is clicked', async () => {
    await waitFor(() => {
      expect(mockProps.setState).toHaveBeenCalled();
    });

    fireEvent.click(screen.getByRole('img'));
    expect(routerPushMock).toHaveBeenCalledWith('/gallery/1');
  });
});
