import Modal from './Modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    children: <div className="rounded-md bg-white px-8 py-4">Modal</div>,
  },
  render: ({ isOpen, setIsOpen, children }) => (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {children}
    </Modal>
  ),
};
