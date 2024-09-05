import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Preloader from './Preloader';

describe('src/components/common/Preloader/Preloader.test.tsx', () => {
  it('should render the Preloader component', () => {
    const { getByRole } = render(<Preloader />);
  });
});
