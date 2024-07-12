import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainGallery from './MainGallery';

describe('src/components/ui/gallery/MainGallery/MainGallery.test.tsx', () => {
  it('should render the MainGallery component', () => {
    const { getByRole } = render(<MainGallery />);
  });
});
