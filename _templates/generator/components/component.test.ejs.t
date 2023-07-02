---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---

import { render } from '@testing-library/react';
import { <%= h.changeCase.pascal(component_name) %> } from '.';

describe('<%= h.changeCase.pascal(component_name) %>', () => {
  it('renders correctly', () => {
    const { container } = render(<<%= h.changeCase.pascal(component_name) %> />);
    expect(container).toMatchSnapshot();
  });
});
