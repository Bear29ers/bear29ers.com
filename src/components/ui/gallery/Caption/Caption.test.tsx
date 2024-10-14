import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { Media } from '@/types/media';

import Caption from './Caption';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/gallery/Caption/Caption.test.tsx', () => {
  const getMockMedia = (username = '', timestamp = '2024-03-15T12:00:00Z'): Media => {
    return {
      caption: 'sample caption',
      mediaUrl: 'images/example/image-1.jpg',
      mediaType: 'CAROUSEL_ALBUM',
      permalink: 'https://www.instagram.com/p/C9bfg4vyXNx/',
      likeCount: 123,
      timestamp,
      username,
      id: '18033720356079349',
    };
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    renderResult.unmount();
  });

  it('should render username and caption correctly', () => {
    renderResult = render(
      <Caption media={getMockMedia('bear29ers')} href="/profile/bear29ers" alt="profile-alt" index={0} />
    );
    const mockMedia = getMockMedia('bear29ers');
    expect(screen.getByText(mockMedia.username!)).toBeInTheDocument();
    expect(screen.getByText(mockMedia.caption!)).toBeInTheDocument();
  });

  it('should render the profile image with correct alt text', () => {
    renderResult = render(
      <Caption media={getMockMedia('bear29ers')} href="/profile/bear29ers" alt="profile-alt" index={0} />
    );
    const mockMedia = getMockMedia('bear29ers');
    expect(screen.getByRole('img', { name: mockMedia.username! })).toBeInTheDocument();
  });

  it('should format and display the timestamp correctly', () => {
    renderResult = render(
      <Caption media={getMockMedia('bear29ers')} href="/profile/bear29ers" alt="profile-alt" index={0} />
    );
    expect(screen.getByText('2024-3-15 21:00')).toBeInTheDocument();
  });

  it('render the like count and heart icon correctly', () => {
    renderResult = render(
      <Caption media={getMockMedia('bear29ers')} href="/profile/bear29ers" alt="profile-alt" index={0} />
    );
    const heartIcon = screen.getByRole('img', { hidden: true });
    expect(heartIcon).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('render the correct href for the profile', () => {
    renderResult = render(
      <Caption media={getMockMedia('bear29ers')} href="/profile/bear29ers" alt="profile-alt" index={0} />
    );
    const linkElement = screen.getByTestId('profile-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/profile/bear29ers');
  });

  it('should render with profile alt when username is missing', () => {
    renderResult = render(<Caption media={getMockMedia()} href="/profile/bear29ers" alt="profile-alt" index={0} />);
    expect(screen.getByAltText('profile-alt')).toBeInTheDocument();
  });

  it('should render with alt text when username is missing', () => {
    renderResult = render(<Caption media={getMockMedia()} href="/profile/bear29ers" alt="profile-alt" index={0} />);
    expect(screen.getByRole('heading', { level: 4, name: 'profile-alt' })).toBeInTheDocument();
  });

  it('should render with current date when timestamp is missing', () => {
    jest.setSystemTime(new Date('2024-04-15T12:00:00Z'));
    renderResult = render(
      <Caption media={getMockMedia('', '')} href="/profile/bear29ers" alt="profile-alt" index={0} />
    );
    expect(screen.getByText('2024-4-15 21:00')).toBeInTheDocument();
  });

  it('should render the more on instagram button', () => {
    renderResult = render(<Caption media={getMockMedia()} href="/profile/bear29ers" alt="profile-alt" index={0} />);
    expect(screen.getByRole('link', { name: 'More on Instagram' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'More on Instagram' })).toHaveAttribute(
      'href',
      `${getMockMedia().permalink}?img_index=1`
    );
  });
});
