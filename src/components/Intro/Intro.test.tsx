import { render } from '@testing-library/react';

import Intro from './Intro';

describe('src/components/Intro/Intro.test.tsx', () => {
  it('should render the Intro component', () => {
    const { getByRole } = render(<Intro />);
  });
});
