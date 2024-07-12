import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FanningItem from './FanningItem';

describe('src/components/ui/gallery/FanningItem/FanningItem.test.tsx', () => {
  it('should render the FanningItem component', () => {
    const { getByRole } = render(<FanningItem />);
  });
});
