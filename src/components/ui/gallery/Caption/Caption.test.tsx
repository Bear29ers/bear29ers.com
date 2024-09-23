import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { Media } from '@/types/media';

import Caption from './Caption';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/gallery/Caption/Caption.test.tsx', () => {
  const mockMedia: Media = {
    caption: 'sample caption',
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
    likeCount: 123,
    timestamp: '2024-07-15T04:15:00+0000',
    username: 'bear29ers',
    id: '18033720356079349',
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Caption media={mockMedia} href="/profile/bear29ers" alt="profile-alt" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render username and caption correctly', () => {
    expect(screen.getByText(mockMedia.username!)).toBeInTheDocument();
    expect(screen.getByText(mockMedia.caption!)).toBeInTheDocument();
  });

  it('should render the profile image with correct alt text', () => {
    expect(screen.getByRole('img', { name: mockMedia.username! })).toBeInTheDocument();
  });

  it('should format and display the timestamp correctly', () => {
    expect(screen.getByText('2024-7-15 13:15')).toBeInTheDocument();
  });

  it('render the like count and heart icon correctly', () => {
    const heartIcon = screen.getByRole('img', { hidden: true });
    expect(heartIcon).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('render the correct href for the profile', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/profile/bear29ers');
  });
});
