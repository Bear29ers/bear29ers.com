import { render } from '@testing-library/react';

import ThreadsIcon from './ThreadsIcon';

describe('src/components/Icons/ThreadsIcon/ThreadsIcon.test.tsx', () => {
  it('should render the ThreadsIcon component with props that isClicked is true', () => {
    const { getByRole } = render(<ThreadsIcon isClicked />);
    expect(getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
  });

  it('should have style that icon background fill is #D2D8D9 with the ThreadsIcon component when isClicked props is true', () => {
    const { getByTestId } = render(<ThreadsIcon isClicked />);
    expect(getByTestId('threads-background')).toHaveStyle('fill: #D2D8D9');
  });

  it('should have style that icon logo fill is #000 with the ThreadsIcon component when isClicked props is true', () => {
    const { getByTestId } = render(<ThreadsIcon isClicked />);
    expect(getByTestId('threads-logo')).toHaveStyle('fill: #000');
  });

  it('should render the ThreadsIcon component with props that isClicked is false', () => {
    const { getByRole } = render(<ThreadsIcon isClicked={false} />);
    expect(getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
  });

  it('should have style that icon background fill is #000 with the ThreadsIcon component when isClicked props is false', () => {
    const { getByTestId } = render(<ThreadsIcon isClicked={false} />);
    expect(getByTestId('threads-background')).toHaveStyle('fill: #000');
  });

  it('should have style that icon logo fill is #D2D8D9 with the ThreadsIcon component when isClicked props is false', () => {
    const { getByTestId } = render(<ThreadsIcon isClicked={false} />);
    expect(getByTestId('threads-logo')).toHaveStyle('fill: #D2D8D9');
  });
});
