import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Gallery from './Gallery';

describe('src/components/ui/gallery/Gallery/Gallery.test.tsx', () => {
  it('should render the Gallery component', () => {
    const { getByRole } = render(<Gallery />);
  });
});
