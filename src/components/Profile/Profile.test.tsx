import { render } from '@testing-library/react';

import Profile from './Profile';

describe('src/components/Profile/Profile.test.tsx', () => {
  it('should render Profile component', () => {
    const { getByRole } = render(<Profile />);
  });
});
