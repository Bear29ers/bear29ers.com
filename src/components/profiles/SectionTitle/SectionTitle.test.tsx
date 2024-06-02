import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SectionTitle from './SectionTitle';

describe('src/components/profiles/SectionTitle/SectionTitle.test.tsx', () => {
  it('should render the SectionTitle component', () => {
    const { getByRole } = render(<SectionTitle />);
  });
});
