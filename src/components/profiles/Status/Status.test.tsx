import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Status from './Status';

describe('src/components/profiles/Status/Status.test.tsx', () => {
  it('should render the Status component', () => {
    const { getByRole } = render(<Status />);
  });
});
