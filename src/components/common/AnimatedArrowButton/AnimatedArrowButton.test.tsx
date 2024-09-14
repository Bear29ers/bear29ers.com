import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedArrowButton from './AnimatedArrowButton';

describe('src/components/common/AnimatedArrowButton/AnimatedArrowButton.test.tsx', () => {
  it('should render the AnimatedArrowButton component', () => {
    const { getByRole } = render(<AnimatedArrowButton />);
  });
});
