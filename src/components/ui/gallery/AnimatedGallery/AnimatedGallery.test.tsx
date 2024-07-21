/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { FC } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedGallery from './AnimatedGallery';

import type { RenderResult } from '@testing-library/react';

jest.mock('framer-motion', () => {
  const ActualReact: typeof React = jest.requireActual('react');

  const MotionImg: FC<{
    src: string;
    onLayoutAnimationComplete?: () => void;
    [key: string]: any;
  }> = ({ src, onLayoutAnimationComplete, ...props }) => {
    ActualReact.useEffect(() => {
      // レイアウトアニメーションの完了をシミュレート
      const timer = setTimeout(() => {
        onLayoutAnimationComplete && onLayoutAnimationComplete();
      }, 0);
      return () => clearTimeout(timer);
    }, [onLayoutAnimationComplete]);

    return <img src={src} {...props} />;
  };

  return {
    motion: {
      img: MotionImg,
    },
  };
});

describe('src/components/ui/gallery/AnimatedGallery/AnimatedGallery.test.tsx', () => {
  let renderResult: RenderResult;
  const mockProps = {
    layoutId: '1',
    imageSrc: 'image-1.jpg',
    zIndex: 'z-[1]',
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

  it('should calls setState when animation completes', async () => {
    await waitFor(() => {
      expect(mockProps.setState).toHaveBeenCalled();
    });
  });
});
