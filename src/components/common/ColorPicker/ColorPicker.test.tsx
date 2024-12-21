import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ColorPicker from './ColorPicker';

describe('src/components/common/ColorPicker/ColorPicker.test.tsx', () => {
  it('should render the ColorPicker component', () => {
    const { getByRole } = render(<ColorPicker />);
  });
});
