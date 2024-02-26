import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuList from './MenuList';

describe('src/components/menus/MenuList/MenuList.test.tsx', () => {
  it('should render the MenuList component', () => {
    const { getByRole } = render(<MenuList />);
  });
});
