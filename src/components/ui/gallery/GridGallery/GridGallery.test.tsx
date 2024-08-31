import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GridGallery from './GridGallery';

describe('src/components/ui/gallery/GridGallery/GridGallery.test.tsx', () => {
  it('should render the GridGallery component', () => {
    const { getByRole } = render(<GridGallery />);
  });
});
