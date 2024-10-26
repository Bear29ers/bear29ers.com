/* eslint-disable no-unused-expressions */

import React from 'react';
import type { FC, ReactNode } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import FanningImages from './FanningImages';

import type { RenderResult } from '@testing-library/react';

jest.mock('framer-motion', () => {
  const ActualReact: typeof React = jest.requireActual('react');

  const MotionDiv: FC<{
    children: ReactNode;
    variants?: unknown;
    initial?: string;
    animate?: string;
    onAnimationComplete?: () => void;
  }> = ({ children, onAnimationComplete, ...props }) => {
    ActualReact.useEffect(() => {
      const timer = setTimeout(() => {
        onAnimationComplete && onAnimationComplete();
      }, 0);
      return () => clearTimeout(timer);
    }, [onAnimationComplete]);

    return (
      <div {...props} data-testid="fanning-images">
        {children}
      </div>
    );
  };

  return {
    motion: {
      div: MotionDiv,
    },
  };
});

jest.mock('../FanningItem/FanningItem', () => {
  const MockFanningItem = ({
    imageSrc,
    layoutId,
    zIndex,
    maxWidth,
    styles,
    initialY,
  }: {
    imageSrc: string;
    layoutId: string;
    zIndex: string;
    maxWidth: string;
    styles: { x: string; y: number; rotate: number };
    initialY: number;
  }) => {
    return (
      <div
        data-testid="fanning-item"
        data-src={imageSrc}
        data-layout-id={layoutId}
        data-z-index={zIndex}
        data-max-width={maxWidth}
        data-styles={JSON.stringify(styles)}
        data-initial-y={initialY}
      />
    );
  };
  return MockFanningItem;
});

describe('src/components/ui/gallery/FanningImages/FanningImages.test.tsx', () => {
  let renderResult: RenderResult;
  const mockProps = {
    mediaList: [
      {
        caption: 'image-1',
        children: {
          data: [
            {
              mediaUrl: 'image-1-child.jpg',
              id: '1-child',
            },
          ],
        },
        mediaUrl: 'image-1.jpg',
        permalink: 'https://www.instagram.com/p/C9bfg4vyXNx/',
        likeCount: 0,
        timestamp: '2024-07-15T04:15:00+0000',
        username: 'bear29ers',
        id: '1',
      },
      {
        caption: 'image-2',
        children: {
          data: [
            {
              mediaUrl: 'image-2-child.jpg',
              id: '2-child',
            },
          ],
        },
        mediaUrl: 'image-2.jpg',
        permalink: 'https://www.instagram.com/p/C9WsRqbyk4Y/',
        likeCount: 3,
        timestamp: '2024-07-13T07:30:00+0000',
        username: 'bear29ers',
        id: '2',
      },
    ],
    maxWidth: 'max-w-100',
    initialY: 100,
    styles: [
      { x: '-60%', y: 0, rotate: -5 },
      { x: '-40%', y: 0, rotate: 5 },
    ],
    zIndexList: ['z-[2]', 'z-[1]'],
    setState: jest.fn(),
  };

  beforeEach(() => {
    renderResult = render(<FanningImages {...mockProps} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the FanningImages component', () => {
    expect(screen.getByTestId('fanning-images')).toBeInTheDocument();
  });

  it('should render correct number of FanningItem components', () => {
    expect(screen.getAllByTestId('fanning-item')).toHaveLength(2);
  });

  it('should calls setState when animation all completes', async () => {
    expect(screen.getByTestId('fanning-images')).toBeInTheDocument();
    await waitFor(() => {
      expect(mockProps.setState).toHaveBeenCalled();
    });
  });
});
