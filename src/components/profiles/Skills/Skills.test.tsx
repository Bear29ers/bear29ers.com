import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Skills from './Skills';

describe('src/components/profiles/Skills/Skills.test.tsx', () => {
  it('should render the Skills component', () => {
    const { getByRole } = render(<Skills />);
  });
});
