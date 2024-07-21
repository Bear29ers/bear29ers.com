/* eslint-disable react/display-name */
import { forwardRef } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainGallery from './MainGallery';

import type { RenderResult } from '@testing-library/react';

type MotionProps = {
  src: string;
  alt: string;
  className: string;
  whileInView?: string;
  viewport?: {
    once: boolean;
    margin: string;
  };
  variants?: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
  };
  initial?: string;
  transition?: {
    duration: number;
  };
};

jest.mock('framer-motion', () => ({
  motion: {
    img: forwardRef<HTMLImageElement, MotionProps>(
      ({ src, alt, className, whileInView, viewport, variants, initial, transition, ...props }, ref) => (
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={className}
          data-testid="motion-img"
          data-while-in-view={whileInView}
          data-viewport={JSON.stringify(viewport)}
          data-variants={JSON.stringify(variants)}
          data-initial={initial}
          data-transition={JSON.stringify(transition)}
          {...props}
        />
      )
    ),
  },
}));

describe('src/components/ui/gallery/MainGallery/MainGallery.test.tsx', () => {
  let renderResult: RenderResult;
  const args = {
    imageSrc: '/images/example/image-4.jpg',
    id: '17924112776916166',
    maxWidth: 'max-w-72',
  };

  beforeEach(() => {
    renderResult = render(<MainGallery {...args} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the MainGallery component', async () => {
    await waitFor(() => {
      expect(screen.getByRole('img', { name: args.id })).toBeInTheDocument();
    });
  });
});
