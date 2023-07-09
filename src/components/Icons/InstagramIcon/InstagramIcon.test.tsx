import { render } from '@testing-library/react';

import InstagramIcon from './InstagramIcon';

describe('src/components/Icons/InstagramIcon/InstagramIcon.test.tsx', () => {
  it('should render InstagramIcon component', () => {
    const { getByRole } = render(<InstagramIcon />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
