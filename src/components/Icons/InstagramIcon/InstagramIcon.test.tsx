import { render } from '@testing-library/react';

import InstagramIcon from './InstagramIcon';

describe('src/components/Icons/InstagramIcon/InstagramIcon.test.tsx', () => {
  it('should render InstagramIcon component', () => {
    const { getByRole } = render(<InstagramIcon className="" />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should render InstagramIcon component with w-20 class', () => {
    const { getByRole } = render(<InstagramIcon className="!w-20" />);
    expect(getByRole('img')).toHaveClass('!w-20');
  });
});
