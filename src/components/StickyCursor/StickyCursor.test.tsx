import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StickyCursor from './StickyCursor';

describe('src/components/StickyCursor/StickyCursor.test.tsx', () => {
  it('should render the StickyCursor component', () => {
    const { getByRole } = render(<StickyCursor />);
  });
});
