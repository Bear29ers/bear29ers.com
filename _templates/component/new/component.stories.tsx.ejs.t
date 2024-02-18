---
to: <%= path %><%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---

import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof <%= h.changeCase.pascal(component_name) %>> = {
  component: <%= h.changeCase.pascal(component_name) %>,
};

export default meta;

type Story = StoryObj<typeof <%= h.changeCase.pascal(component_name) %>>;

export const Standard: Story = {
  render: () => <<%= h.changeCase.pascal(component_name) %> />,
};
