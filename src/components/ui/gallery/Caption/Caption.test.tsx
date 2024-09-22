import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Caption from './Caption';

describe('src/components/ui/gallery/Caption/Caption.test.tsx', () => {
  it('should render the Caption component', () => {
    const { getByRole } = render(<Caption />);
  });
});
