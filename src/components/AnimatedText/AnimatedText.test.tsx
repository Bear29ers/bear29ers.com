import { render } from '@testing-library/react';

import AnimatedText from './AnimatedText';

describe('src/components/AnimatedText/AnimatedText.test.tsx', () => {
  it('should render AnimatedText component', () => {
    const { getByRole } = render(<AnimatedText text="test" className="" />);
    expect(getByRole('heading')).toBeInTheDocument();
  });
});
