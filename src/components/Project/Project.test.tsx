import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Project from './Project';

describe('src/components/Project/Project.test.tsx', () => {
  it('should render the Project component', () => {
    const { getByRole } = render(<Project />);
  });
});
