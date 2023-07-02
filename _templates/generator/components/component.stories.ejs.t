---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { <%= h.changeCase.pascal(component_name) %> } from '.';

export default {
  component: <%= h.changeCase.pascal(component_name) %>
} as ComponentMeta<typeof <%= h.changeCase.pascal(component_name) %>>;

export const ComponentStatus: ComponentStoryObj<typeof <%= h.changeCase.pascal(component_name) %>> = {};
