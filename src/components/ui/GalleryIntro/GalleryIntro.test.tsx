import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GalleryIntro from './GalleryIntro';

describe('src/components/ui/GalleryIntro/GalleryIntro.test.tsx', () => {
  it('should render the GalleryIntro component', () => {
    const { getByRole } = render(<GalleryIntro />);
  });
});
