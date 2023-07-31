import { render } from '@testing-library/react';

import { TailwindDark } from './SkillIconsDark';

describe('src/components/Icons/SkillIcons/SkillIconsDark.test.tsx', () => {
  it('should render Tailwind svg component', () => {
    const { getByTestId } = render(<TailwindDark />);
    expect(getByTestId('tailwind')).toBeInTheDocument();
  });
});
