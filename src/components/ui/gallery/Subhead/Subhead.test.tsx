import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Subhead from './Subhead';

describe('src/components/ui/gallery/Subhead/Subhead.test.tsx', () => {
  it('should render the Subhead component', () => {
    const { getByRole } = render(<Subhead />);
  });
});
