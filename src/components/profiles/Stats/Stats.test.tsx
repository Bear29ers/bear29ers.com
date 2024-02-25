import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Stats from './Stats';

describe('src/components/profiles/Stats/Stats.test.tsx', () => {
  it('should render the Stats component', () => {
    const { getByRole } = render(<Stats />);
  });
});
