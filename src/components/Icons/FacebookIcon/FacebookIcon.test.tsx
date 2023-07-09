import { render } from '@testing-library/react';

import FacebookIcon from './FacebookIcon';

describe('src/components/Icons/FacebookIcon/FacebookIcon.test.tsx', () => {
  it('should render FacebookIcon component', () => {
    const { getByRole } = render(<FacebookIcon />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
