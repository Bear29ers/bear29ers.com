import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FanningImages from './FanningImages';

describe('src/components/ui/gallery/FanningImages/FanningImages.test.tsx', () => {
  it('should render the FanningImages component', () => {
    const { getByRole } = render(<FanningImages />);
  });
});
