import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PROFILE_TEXT } from '@/common/constants/about';

import Footer from './Footer';

import type { RenderResult } from '@testing-library/react';

describe('src/components/Footer/Footer.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Footer />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render current year', () => {
    const year = new Date().getFullYear();
    const regex = new RegExp(String(year));
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it('should render the username', () => {
    const username = PROFILE_TEXT.userName;
    const regex = new RegExp(username);
    expect(screen.getByText(regex)).toBeInTheDocument();
  });
});
