import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SkillIcons from './SkillIcons';

describe('src/components/icons/SkillIcons/SkillIcons.test.tsx', () => {
  it('should render the SkillIcons component', () => {
    const { getByRole } = render(<SkillIcons />);
  });
});
