import { render } from '@testing-library/react';

import SocialIcons from './SocialIcons';

describe('src/components/SocialIcons/SocialIcons.test.tsx', () => {
  it('should render the SocialIcons component', () => {
    const { getByRole } = render(<SocialIcons />);
  });
});
