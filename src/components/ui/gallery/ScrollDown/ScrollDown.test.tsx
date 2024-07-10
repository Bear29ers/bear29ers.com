import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ScrollDown from './ScrollDown';

describe('src/components/ui/gallery/ScrollDown/ScrollDown.test.tsx', () => {
  it('should render the ScrollDown component', () => {
    const { getByRole } = render(<ScrollDown />);
  });
});
