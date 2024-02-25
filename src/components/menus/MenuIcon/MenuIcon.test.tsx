import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuIcon from './MenuIcon';

describe('src/components/menus/MenuIcon/MenuIcon.test.tsx', () => {
  it('should render the MenuIcon component', () => {
    const { getByRole } = render(<MenuIcon />);
  });
});
