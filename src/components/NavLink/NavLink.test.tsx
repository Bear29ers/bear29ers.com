import { render } from '@testing-library/react';

import NavLink from './NavLink';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next-router-mock'),
  usePathname: () => jest.fn(),
}));

// TODO: jest.spyOnでの説明を記載
// eslint-disable-next-line @typescript-eslint/no-var-requires
const usePathname = jest.spyOn(require('next/navigation'), 'usePathname');

describe('src/components/NavLink/NavLink.test.tsx', () => {
  it('should render NavLink component that is [role=link] with name Home and have w-full class', () => {
    usePathname.mockReturnValue('/');
    const { getByRole } = render(<NavLink href="/" title="Home" />);
    expect(getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(getByRole('link', { name: 'Home' }).querySelector('span')).toHaveClass('w-full');
  });

  it('should render NavLink component that is [role=link] with name About and have w-full class', () => {
    usePathname.mockReturnValue('/about');
    const { getByRole } = render(<NavLink href="/about" title="About" />);
    expect(getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(getByRole('link', { name: 'About' }).querySelector('span')).toHaveClass('w-full');
  });

  it('should render NavLink compopnent that is [role=link] with name Projects and have w-full class', () => {
    usePathname.mockReturnValue('/projects');
    const { getByRole } = render(<NavLink href="/projects" title="Projects" />);
    expect(getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    expect(getByRole('link', { name: 'Projects' }).querySelector('span')).toHaveClass('w-full');
  });

  it('should render NavLink component that is [role=link] with name Articles and have w-full class', () => {
    usePathname.mockReturnValue('/articles');
    const { getByRole } = render(<NavLink href="/articles" title="Articles" />);
    expect(getByRole('link', { name: 'Articles' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/articles');
    expect(getByRole('link', { name: 'Articles' }).querySelector('span')).toHaveClass('w-full');
  });
});
