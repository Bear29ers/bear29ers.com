import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Skills from './Skills';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Skills/Skills.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Skills />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the title', () => {
    expect(screen.getByRole('heading', { level: 3, name: /Skills and Tools/ })).toBeInTheDocument();
  });
});
