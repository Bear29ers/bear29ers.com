import { render } from '@testing-library/react';

import GithubIcon from './GithubIcon';

describe('src/components/Icons/GithubIcon/GithubIcon.test.tsx', () => {
  it('should render GithubIcon component', () => {
    const { getByRole } = render(<GithubIcon className="" />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should render GithubIcon component with w-20 class', () => {
    const { getByRole } = render(<GithubIcon className="!w-20" />);
    expect(getByRole('img')).toHaveClass('!w-20');
  });
});
