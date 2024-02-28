import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuWindow from './MenuWindow';

describe('src/components/menus/MenuWindow/MenuWindow.test.tsx', () => {
  it('should render the MenuWindow component', () => {
    const { getByRole } = render(<MenuWindow />);
  });
});
