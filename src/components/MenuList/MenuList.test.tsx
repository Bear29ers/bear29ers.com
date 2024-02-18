import { render } from '@testing-library/react';

import MenuList from './MenuList';

describe('src/components/MenuList/MenuList.test.tsx', () => {
  it('should render the MenuList component', () => {
    const { getByRole } = render(<MenuList />);
  });
});
