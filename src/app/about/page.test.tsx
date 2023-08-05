import { render, screen } from '@testing-library/react';

import Page from './page';

describe('src/app/about/page.test.tsx', () => {
  it('should render About page with PageLayout and ContentLayout', () => {
    render(<Page />);
    const layouts = screen.getAllByRole('presentation');
    expect(layouts).toHaveLength(2);
    layouts.map((layout) => expect(layout).toBeInTheDocument());
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
