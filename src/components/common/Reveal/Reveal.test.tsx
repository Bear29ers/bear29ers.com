import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Reveal from './Reveal';

describe('src/components/common/Reveal/Reveal.test.tsx', () => {
  it('should render the Reveal component', () => {
    const { getByRole } = render(<Reveal />);
  });
});
