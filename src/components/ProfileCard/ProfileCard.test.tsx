import { render } from '@testing-library/react';

import ProfileCard from './ProfileCard';

describe('src/components/ProfileCard/ProfileCard.test.tsx', () => {
  it('should render ProfileCard component', () => {
    const { getByRole } = render(<ProfileCard />);
  });
});
