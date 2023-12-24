import { render } from '@testing-library/react';

import GithubIcon from './GithubIcon';

describe('src/components/Icons/GithubIcon/GithubIcon.test.tsx', () => {
  it('should render the GithubIcon component with props that isClicked is true', () => {
    const { getByRole } = render(<GithubIcon isClicked />);
    expect(getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
  });

  it('should have style that fill is #D2D8D9 with the GithubIcon component when isClicked props is true', () => {
    const { getByRole } = render(<GithubIcon isClicked />);
    expect(getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #D2D8D9');
  });

  it('should render the GithubIcon component with props that isClicked is false', () => {
    const { getByRole } = render(<GithubIcon isClicked={false} />);
    expect(getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
  });

  it('should have style that fill is #000 with the GithubIcon component when isClicked props is false', () => {
    const { getByRole } = render(<GithubIcon isClicked={false} />);
    expect(getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #000');
  });
});
