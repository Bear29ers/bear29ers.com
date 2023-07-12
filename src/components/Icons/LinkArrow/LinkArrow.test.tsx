import { render } from '@testing-library/react';

import LinkArrow from './LinkArrow';

describe('src/components/LinkArrow/LinkArrow.test.tsx', () => {
  it('should render LinkArrow component', () => {
    const { getByRole } = render(<LinkArrow className="" />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should render LinkArrow component with w-20 class', () => {
    const { getByRole } = render(<LinkArrow className="!w-20" />);
    expect(getByRole('img')).toHaveClass('!w-20');
  });
});
