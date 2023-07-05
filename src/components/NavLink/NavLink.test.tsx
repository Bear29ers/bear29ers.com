import { render } from '@testing-library/react';

import NavLink from './NavLink';

describe('src/components/NavLink/NavLink.test.tsx', () => {
  it('should render NavLink component that is [role=link] with name Home', () => {
    const { getByRole } = render(<NavLink href="/" title="Home" />);
    expect(getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  // TODO: ページ実装後にページ遷移のテストを記述する

  it('should render NavLink component that is [role=link] with name About', () => {
    const { getByRole } = render(<NavLink href="/about" title="About" />);
    expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('should render NavLink compopnent that is [role=link] with name Projects', () => {
    const { getByRole } = render(<NavLink href="/projects" title="Projects" />);
    expect(getByRole('link', { name: 'Projects' })).toBeInTheDocument();
  });

  it('should render NavLink component that is [role=link] with name Articles', () => {
    const { getByRole } = render(<NavLink href="/articles" title="Articles" />);
    expect(getByRole('link', { name: 'Articles' })).toBeInTheDocument();
  });
});
