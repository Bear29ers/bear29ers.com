import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Menu from './Menu';

describe('src/components/Menu/Menu.test.tsx', () => {
  it('should render the Menu component', () => {
    const { getByRole } = render(<Menu />);
  });
});
