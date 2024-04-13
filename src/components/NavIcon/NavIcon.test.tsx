import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavIcon from './NavIcon';

describe('src/components/NavIcon/NavIcon.test.tsx', () => {
  it('should render the NavIcon component', () => {
    const { getByRole } = render(<NavIcon />);
  });
});
