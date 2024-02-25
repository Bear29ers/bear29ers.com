import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Edit from './Edit';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Edit/Edit.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Edit />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the username', () => {
    expect(screen.getByText(/Bear29ers/)).toBeInTheDocument();
  });

  it('should render the PencilIcon svg', () => {
    expect(screen.getByRole('img', { name: 'PencilIcon' })).toBeInTheDocument();
  });
});
