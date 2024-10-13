import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedArrowButton from './AnimatedArrowButton';

import type { RenderResult } from '@testing-library/react';

const routerPushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

describe('src/components/common/AnimatedArrowButton/AnimatedArrowButton.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<AnimatedArrowButton url="/test-url" text="Test Button" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the button with correct text', () => {
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  it('should call router.push with correct arguments when clicked', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(routerPushMock).toHaveBeenCalledWith('/test-url', { scroll: false });
  });

  it('should change styles on hover', () => {
    const button = screen.getByRole('button', { name: 'Test Button' });

    fireEvent.mouseEnter(button);

    expect(button.firstChild).toHaveClass('group-hover:w-full');
    expect(button.querySelector('.group-hover\\:text-white')).toBeInTheDocument();
  });
});
