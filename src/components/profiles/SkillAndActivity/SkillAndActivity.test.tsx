import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SkillAndActivity from './SkillAndActivity';

describe('src/components/profiles/SkillAndActivity/SkillAndActivity.test.tsx', () => {
  it('should render the SkillAndActivity component', () => {
    const { getByRole } = render(<SkillAndActivity />);
  });
});
