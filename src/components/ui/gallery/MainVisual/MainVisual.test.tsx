import type { FC } from 'react';
import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainVisual from './MainVisual';

import type { RenderResult } from '@testing-library/react';

jest.mock('motion/react', () => {
  const ActualReact: typeof React = jest.requireActual('react');

  const MotionImg: FC<{
    src: string;
    onLayoutAnimationComplete?: () => void;
    layout?: boolean | string;
    layoutId?: string;
    animate?: boolean | string;
    [key: string]: any;
  }> = ({ src, onLayoutAnimationComplete, layout, layoutId, animate, ...props }) => {
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
        {...(animate ? { 'data-animate': animate.toString() } : {})}
      />
    );
  };

  return {
    motion: {
      img: MotionImg,
    },
  };
});

describe('src/components/ui/gallery/MainVisual/MainVisual.test.tsx', () => {
  let renderResult: RenderResult;

  describe('when canAnimate is false', () => {
    const mockProps = {
      imageSrc: '/images/example/image-7.jpg',
      layoutId: '17924112776916166',
      canAnimate: false,
      maxWidth: 'max-w-96',
      setState: jest.fn(),
    };

    beforeEach(() => {
      renderResult = render(<MainVisual {...mockProps} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the MainVisual image', async () => {
      await waitFor(() => {
        expect(screen.getByRole('img', { name: 'Main Visual' })).toBeInTheDocument();
      });
    });

    it('should calls setState when animation completes', async () => {
      await waitFor(() => {
        expect(mockProps.setState).toHaveBeenCalled();
      });
    });
  });

  describe('when canAnimate is true', () => {
    const mockProps = {
      imageSrc: '/images/example/image-7.jpg',
      layoutId: '17924112776916166',
      canAnimate: true,
      maxWidth: 'max-w-96',
      setState: jest.fn(),
    };

    beforeEach(() => {
      renderResult = render(<MainVisual {...mockProps} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the MainVisual image', async () => {
      await waitFor(() => {
        expect(screen.getByRole('img', { name: 'Main Visual' })).toBeInTheDocument();
      });
    });
  });
});
