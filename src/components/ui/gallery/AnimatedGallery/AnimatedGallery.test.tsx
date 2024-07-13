import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedGallery from './AnimatedGallery';

describe('src/components/ui/gallery/AnimatedGallery/AnimatedGallery.test.tsx', () => {
  it('should render the AnimatedGallery component', () => {
    const { getByRole } = render(<AnimatedGallery />);
  });
});
