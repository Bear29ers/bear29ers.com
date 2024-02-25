import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from './Contact';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Contact/Contact.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Contact />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the title', () => {
    expect(screen.getByRole('heading', { level: 3, name: /Connect with me/ })).toBeInTheDocument();
  });

  it('should render the link with the GithubIcon component', () => {
    expect(screen.getByRole('link', { name: 'GithubIcon' })).toBeInTheDocument();
  });

  it('should render the link with the InstagramIcon component', () => {
    expect(screen.getByRole('link', { name: 'InstagramIcon' })).toBeInTheDocument();
  });

  it('should render the link with the FacebookIcon component', () => {
    expect(screen.getByRole('link', { name: 'FacebookIcon' })).toBeInTheDocument();
  });

  it('should render the link with the ThreadsIcon component', () => {
    expect(screen.getByRole('link', { name: 'ThreadsIcon' })).toBeInTheDocument();
  });
});
