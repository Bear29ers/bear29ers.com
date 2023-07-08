import { render } from '@testing-library/react';

import FacebookIcon from './FacebookIcon';

describe('src/components/Icons/FacebookIcon/FacebookIcon.test.tsx', () => {
  it('should render FacebookIcon component', () => {
    const { getByRole } = render(<FacebookIcon className="" />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should render FacebookIcon component with w-20 class', () => {
    const { getByRole } = render(<FacebookIcon className="!w-20" />);
    expect(getByRole('img')).toHaveClass('!w-20');
  });
});
