import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProfileIcons from './ProfileIcons';

describe('src/components/icons/ProfileIcons/ProfileIcons.test.tsx', () => {
  it('should render the ProfileIcons component', () => {
    const { getByRole } = render(<ProfileIcons />);
  });
});
