---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import type { FC } from 'react';

const <%= h.changeCase.pascal(component_name) %>: FC = () => {
  return (
    <>
      <h1><%= h.changeCase.pascal(component_name) %></h1>
    </>
  );
};

export default <%= h.changeCase.pascal(component_name) %>;
