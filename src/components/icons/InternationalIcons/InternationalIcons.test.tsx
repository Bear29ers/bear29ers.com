import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { JapanIcon } from './InternationalIcons';

describe('src/components/icons/JapanIcon/JapanIcon.test.tsx', () => {
  it('should render the JapanIcon component', () => {
    const { getByRole } = render(<JapanIcon />);
  });
});
