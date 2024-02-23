import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Resolution from './Resolution';

describe('src/components/profiles/Resolution/Resolution.test.tsx', () => {
  it('should render the Resolution component', () => {
    const { getByRole } = render(<Resolution />);
  });
});
