import type { FC } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainGallery from './MainGallery';

import type { RenderResult } from '@testing-library/react';

jest.mock('motion/react', () => ({
  motion: jest.fn().mockImplementation((Component: FC) => Component),
}));

describe('src/components/ui/gallery/MainGallery/MainGallery.test.tsx', () => {
  let renderResult: RenderResult;
  const args = {
    imageSrc: '/images/example/image-4.jpg',
    id: '17924112776916166',
    width: 288,
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
