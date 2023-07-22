import { render } from '@testing-library/react';

import ThreadsIcon from './ThreadsIcon';

describe('src/components/Icons/ThreadsIcon/ThreadsIcon.test.tsx', () => {
  it('should render ThreadsIcon component', () => {
    const { getByRole } = render(<ThreadsIcon />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
