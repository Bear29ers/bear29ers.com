import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contributions from './Contributions';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Contributions/Contributions.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Contributions />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the title', () => {
    expect(screen.getByRole('heading', { level: 3, name: /Contributions/ })).toBeInTheDocument();
  });

  it('should render the Contributions image', () => {
    expect(screen.getByRole('img', { name: 'Contributions' })).toBeInTheDocument();
  });
});
