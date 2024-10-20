import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from './Modal';

import type { RenderResult } from '@testing-library/react';

const routerBackMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: routerBackMock,
  }),
}));

describe('src/components/common/Modal/Modal.test.tsx', () => {
  const mockSetIsOpen = jest.fn();

  let renderResult: RenderResult;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render children when isOpen props is true', () => {
    renderResult = render(
      <Modal isOpen setIsOpen={mockSetIsOpen}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render children when isOpen props is false', () => {
    renderResult = render(
      <Modal isOpen={false} setIsOpen={mockSetIsOpen}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('should call router.back() and setIsOpen(false) when clicking outside the modal', () => {
    renderResult = render(
      <Modal isOpen setIsOpen={mockSetIsOpen}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.mouseDown(renderResult.container.firstChild as Element);

    expect(routerBackMock).toHaveBeenCalled();
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  it('should not call router.back() and setIsOpen(false) when clicking inside the modal', () => {
    renderResult = render(
      <Modal isOpen setIsOpen={mockSetIsOpen}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.mouseDown(screen.getByText('Modal Content'));

    expect(routerBackMock).not.toHaveBeenCalled();
    expect(mockSetIsOpen).not.toHaveBeenCalledWith(false);
  });
});
