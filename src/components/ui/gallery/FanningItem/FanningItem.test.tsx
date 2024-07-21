import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FanningItem from './FanningItem';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/gallery/FanningItem/FanningItem.test.tsx', () => {
  let renderResult: RenderResult;
  const args = {
    imageSrc: '/images/example/image-3.jpg',
    layoutId: '17924112776916166',
    styles: {
      x: '-60%',
      y: 0,
      rotate: -5,
    },
    zIndex: 'z-[3]',
    maxWidth: 'max-w-72',
    initialY: 220,
  };

  beforeEach(() => {
    renderResult = render(<FanningItem {...args} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the FanningItem component', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
