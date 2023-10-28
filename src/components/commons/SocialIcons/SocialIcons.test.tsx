import { render } from '@testing-library/react';

import SocialIcons from './SocialIcons';

describe('src/components/common/SocialIcons/SocialIcons.test.tsx', () => {
  it('should render SocialIcons component', () => {
    const { getByRole } = render(<SocialIcons />);
  });
});
