import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { Children } from '@/types/media';

import Thumbnails from './Thumbnails';

describe('src/components/ui/gallery/Thumbnails/Thumbnails.test.tsx', () => {
  const setIndexMock = jest.fn();
  const mockImages: Children = {
    data: [
      { id: '1', mediaUrl: '/image1.jpg' },
      { id: '2', mediaUrl: '/image2.jpg' },
      { id: '3', mediaUrl: '/image3.jpg' },
    ],
  };

  it('should render images correctly', () => {
    render(<Thumbnails images={mockImages} index={0} setIndex={setIndexMock} />);

    mockImages.data.forEach((image) => {
      const imgElement = screen.getByAltText(image.mediaUrl);
      expect(imgElement).toBeInTheDocument();
    });
  });

  it('should call setIndex with correct index on thumbnail click', () => {
    render(<Thumbnails images={mockImages} index={0} setIndex={setIndexMock} />);

    const secondThumbnailButton = screen.getByAltText(mockImages.data[1]!.mediaUrl).closest('button');

    fireEvent.click(secondThumbnailButton!);

    expect(setIndexMock).toHaveBeenCalledWith(1);
  });

  it('should apply active class to the correct thumbnail', () => {
    render(<Thumbnails images={mockImages} index={1} setIndex={setIndexMock} />);

    const activeImage = screen.getByAltText(mockImages.data[1]!.mediaUrl);
    const inactiveImage = screen.getByAltText(mockImages.data[0]!.mediaUrl);

    expect(activeImage.closest('button')).toHaveClass('relative h-full shrink-0');
    expect(inactiveImage.closest('button')).toHaveClass('relative h-full shrink-0');
  });
});
