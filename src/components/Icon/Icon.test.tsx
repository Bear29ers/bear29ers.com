import { render } from '@testing-library/react';

import Icon from './Icon';

describe('src/components/Icon/Icon.test.tsx', () => {
  it('should render Icon component', () => {
    const { getByRole } = render(<Icon />);
  });
});
