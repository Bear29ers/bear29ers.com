import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loader from './Loader';

describe('src/components/ui/Loader/Loader.test.tsx', () => {
  it('should render the Loader component', () => {
    const { getByRole } = render(<Loader />);
  });
});
