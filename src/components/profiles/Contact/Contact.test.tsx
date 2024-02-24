import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from './Contact';

describe('src/components/profiles/Contact/Contact.test.tsx', () => {
  it('should render the Contact component', () => {
    const { getByRole } = render(<Contact />);
  });
});
