import { render } from '@testing-library/react';

import Page from './page';

describe('src/app/about/page.test.tsx', () => {
  it('should render About page with ContentLayout', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('presentation')).toBeInTheDocument();
  });

  it('should render Animated text heading', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render Profile component', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('grid')).toBeInTheDocument();
  });
});
