import { render } from '@testing-library/react';

import FacebookIcon from './FacebookIcon';

describe('src/components/Icons/FacebookIcon/FacebookIcon.test.tsx', () => {
  it('should render the FacebookIcon component', () => {
    const { getByRole } = render(<FacebookIcon />);
    expect(getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
  });
});
