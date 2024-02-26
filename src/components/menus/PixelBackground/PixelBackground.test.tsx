import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PixelBackground from './PixelBackground';

describe('src/components/menus/PixelBackground/PixelBackground.test.tsx', () => {
  it('should render the PixelBackground component', () => {
    const { getByRole } = render(<PixelBackground />);
  });
});
