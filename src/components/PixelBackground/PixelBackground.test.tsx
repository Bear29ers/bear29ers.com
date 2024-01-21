import { render } from '@testing-library/react';

import PixelBackground from './PixelBackground';

describe('src/components/PixelBackground/PixelBackground.test.tsx', () => {
  it('should render the PixelBackground component', () => {
    const { getByRole } = render(<PixelBackground />);
  });
});
