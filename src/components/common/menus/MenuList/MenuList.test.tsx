import { render, screen } from '@testing-library/react';

import MenuList from './MenuList';

import type { RenderResult } from '@testing-library/react';

describe('src/components/common/menus/MenuList/MenuList.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<MenuList pathname="/about" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the Home menu item', () => {
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should not have pointer-events-none and line-through class with the Home menu item', () => {
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass('pointer-events-none line-through');
  });

  it('should render the About menu item', () => {
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('should not have pointer-events-none and line-through class with the About menu item', () => {
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveClass('pointer-events-none line-through');
  });

  it('should render the Experience menu item', () => {
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument();
  });

  it('should not have pointer-events-none and line-through class with the Experience menu item', () => {
    expect(screen.getByRole('link', { name: 'Experience' })).not.toHaveClass('pointer-events-none line-through');
  });

  it('should render the Works menu item', () => {
    expect(screen.getByRole('link', { name: 'Works' })).toBeInTheDocument();
  });

  it('should have pointer-events-none and line-through class with the Works menu item', () => {
    expect(screen.getByRole('link', { name: 'Works' })).toHaveClass('pointer-events-none line-through');
  });

  it('should render the Gallery menu item', () => {
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument();
  });

  it('should have pointer-events-none and line-through class with the Gallery menu item', () => {
    expect(screen.getByRole('link', { name: 'Gallery' })).not.toHaveClass('pointer-events-none line-through');
  });

  it('should render the GithubIcon component', () => {
    expect(screen.getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
  });

  it('should render the InstagramIcon component', () => {
    expect(screen.getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
  });

  it('should render the FacebookIcon component', () => {
    expect(screen.getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
  });

  it('should render the ThreadsIcon component', () => {
    expect(screen.getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
  });
});
