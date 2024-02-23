import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ThreadsIcon from './ThreadsIcon';

describe('src/components/icons/ThreadsIcon/ThreadsIcon.test.tsx', () => {
  it('should render the ThreadsIcon component', () => {
    const { getByRole } = render(<ThreadsIcon />);
  });
});
