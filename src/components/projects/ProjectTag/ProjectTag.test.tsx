import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectTag from './ProjectTag';

describe('src/components/projects/ProjectTag/ProjectTag.test.tsx', () => {
  it('should render the ProjectTag component', () => {
    const { getByRole } = render(<ProjectTag />);
  });
});
