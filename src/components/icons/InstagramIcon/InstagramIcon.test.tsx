import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import InstagramIcon from './InstagramIcon';

describe('src/components/icons/InstagramIcon/InstagramIcon.test.tsx', () => {
  it('should render the InstagramIcon component', () => {
    const { getByRole } = render(<InstagramIcon />);
  });
});
