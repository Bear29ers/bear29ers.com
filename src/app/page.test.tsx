import { fireEvent, render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import Page from './page';

describe('src/app/page.test.tsx', () => {
  it('should render Home page with Navbar', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('should render Home page with main role', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('main')).toBeInTheDocument();
  });

  it('should render Home page with a profile image', () => {
    const { getByAltText } = render(<Page />);
    expect(getByAltText('Bear29ers')).toBeInTheDocument();
  });

  it('should render Home page with the animated text', () => {
    const { getByRole } = render(<Page />);
    expect(getByRole('heading')).toBeInTheDocument();
  });

  describe('fireEvent click on Navbar', () => {
    it('should page transition when about navlink is clicked', () => {
      const { getByRole } = render(<Page />, { wrapper: MemoryRouterProvider });
      const aboutLink = getByRole('link', { name: 'About' });
      expect(aboutLink).toBeInTheDocument();
      fireEvent.click(aboutLink);
      expect(mockRouter.asPath).toBe('/about');
    });

    it('should page transition when projects navlink is clicked', () => {
      const { getByRole } = render(<Page />, { wrapper: MemoryRouterProvider });
      const projectsLink = getByRole('link', { name: 'Projects' });
      expect(projectsLink).toBeInTheDocument();
      fireEvent.click(projectsLink);
      expect(mockRouter.asPath).toBe('/projects');
    });

    it('should page transition when articles navlink is clicked', () => {
      const { getByRole } = render(<Page />, { wrapper: MemoryRouterProvider });
      const articlesLink = getByRole('link', { name: 'Articles' });
      expect(articlesLink).toBeInTheDocument();
      fireEvent.click(articlesLink);
      expect(mockRouter.asPath).toBe('/articles');
    });
  });

  describe('fireEvent click on Explore button', () => {
    it('should page transition when explore button is clicked', () => {
      const { getByRole } = render(<Page />, { wrapper: MemoryRouterProvider });
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(mockRouter.asPath).toBe('/about');
    });
  });
});
