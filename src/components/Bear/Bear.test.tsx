import { render } from '@testing-library/react';

import Bear from './Bear';

describe('src/components/Bear/Bear.test.tsx', () => {
  it('should render the Bear component', () => {
    const { getByRole } = render(<Bear />);
  });
});
