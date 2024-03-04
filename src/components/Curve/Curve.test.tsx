import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Curve from './Curve';

describe('src/components/Curve/Curve.test.tsx', () => {
  it('should render the Curve component', () => {
    const { getByRole } = render(<Curve />);
  });
});
