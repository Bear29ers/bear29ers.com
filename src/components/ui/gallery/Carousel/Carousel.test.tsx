import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Carousel from './Carousel';

describe('src/components/ui/gallery/Carousel/Carousel.test.tsx', () => {
  it('should render the Carousel component', () => {
    const { getByRole } = render(<Carousel />);
  });
});
