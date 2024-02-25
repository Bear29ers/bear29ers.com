import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contributions from './Contributions';

describe('src/components/profiles/Contributions/Contributions.test.tsx', () => {
  it('should render the Contributions component', () => {
    const { getByRole } = render(<Contributions />);
  });
});
