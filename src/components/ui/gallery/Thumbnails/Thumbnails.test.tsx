import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Thumbnails from './Thumbnails';

describe('src/components/ui/gallery/Thumbnails/Thumbnails.test.tsx', () => {
  it('should render the Thumbnails component', () => {
    const { getByRole } = render(<Thumbnails />);
  });
});
