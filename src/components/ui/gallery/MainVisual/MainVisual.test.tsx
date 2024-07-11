import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainVisual from './MainVisual';

describe('src/components/ui/gallery/MainVisual/MainVisual.test.tsx', () => {
  it('should render the MainVisual component', () => {
    const { getByRole } = render(<MainVisual />);
  });
});
