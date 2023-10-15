import { render } from '@testing-library/react';

import Tbd from './Tbd';

describe('src/components/Tbd/Tbd.test.tsx', () => {
  it('should render Tbd component', () => {
    const { getByTestId } = render(<Tbd width="w-full" />);
    expect(getByTestId('tbd')).toBeInTheDocument();
  });

  it('should render Tbd component with w-5/12 tailwind class', () => {
    const { getByTestId } = render(<Tbd width="w-5/12" />);
    expect(getByTestId('tbd')).toHaveClass('w-5/12');
  });

  it('should render Tbd component with w-7/12 tailwind class', () => {
    const { getByTestId } = render(<Tbd width="w-7/12" />);
    expect(getByTestId('tbd')).toHaveClass('w-7/12');
  });

  it('should render Tbd component with FiSlash icon', () => {
    const { getByTestId } = render(<Tbd width="w-full" />);
    expect(getByTestId('slash-icon')).toBeInTheDocument();
  });

  it('should render Tbd component with TBD text', () => {
    const { getByText } = render(<Tbd width="w-full" />);
    expect(getByText('TBD')).toBeInTheDocument();
  });
});
