import { render } from '@testing-library/react';

import GithubIcon from './GithubIcon';

describe('src/components/Icons/GithubIcon/GithubIcon.test.tsx', () => {
  it('should render GithubIcon component', () => {
    const { getByRole } = render(<GithubIcon />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
