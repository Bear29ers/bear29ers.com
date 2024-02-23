import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Profile from './Profile';

describe('src/components/Profile/Profile.test.tsx', () => {
  it('should render the Profile component', () => {
    const { getByRole } = render(<Profile />);
  });
});
