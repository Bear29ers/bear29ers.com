---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---

import { render } from '@testing-library/react';

import { <%= h.changeCase.pascal(component_name) %> } from './<%= h.changeCase.pascal(component_name) %>';

describe('src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx', () => {
  it('renders correctly', () => {
    const { container } = render(<<%= h.changeCase.pascal(component_name) %> />);
    expect(container).toMatchSnapshot();
  });
});