import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectHighlight from './ProjectHighlight';

describe('src/components/projects/ProjectHighlight/ProjectHighlight.test.tsx', () => {
  it('should render the ProjectHighlight component', () => {
    const { getByRole } = render(<ProjectHighlight />);
  });
});
