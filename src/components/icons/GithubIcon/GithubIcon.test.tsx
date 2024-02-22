import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GithubIcon from './GithubIcon';

describe('src/components/icons/GithubIcon/GithubIcon.test.tsx', () => {
  it('should render the GithubIcon component', () => {
    const { getByRole } = render(<GithubIcon />);
  });
});
