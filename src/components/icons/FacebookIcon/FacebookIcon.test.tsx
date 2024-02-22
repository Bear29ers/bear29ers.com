import { render } from '@testing-library/react';

import FacebookIcon from './FacebookIcon';

describe('src/components/icons/FacebookIcon/FacebookIcon.test.tsx', () => {
  it('should render the FacebookIcon component', () => {
    const { getByRole } = render(<FacebookIcon />);
  });
});
