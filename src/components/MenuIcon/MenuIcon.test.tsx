import { render } from '@testing-library/react';

import MenuIcon from './MenuIcon';

describe('src/components/MenuIcon/MenuIcon.test.tsx', () => {
  it('should render the MenuIcon component', () => {
    const { getByRole } = render(<MenuIcon />);
  });
});
