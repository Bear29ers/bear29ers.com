---
to: <%= path %><%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---

import { render, screen } from '@testing-library/react';

import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>';

import type { RenderResult } from '@testing-library/react';

describe('<%= path %><%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<<%= h.changeCase.pascal(component_name) %> />); 
  });

  afterEach(() => {
    renderResult.unmount();
  })

  it('should render the <%= h.changeCase.pascal(component_name) %> component', () => {
    expect(screen.getByRole('heading', { name: '<%= h.changeCase.pascal(component_name) %>' })).toBeInTheDocument();
  });
});
