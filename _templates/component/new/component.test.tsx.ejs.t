---
to: <%= path %><%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---

import { render } from '@testing-library/react';

import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>';

describe('<%= path %><%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx', () => {
  it('should render the <%= h.changeCase.pascal(component_name) %> component', () => {
    const { getByRole } = render(<<%= h.changeCase.pascal(component_name) %> />);
  });
});
