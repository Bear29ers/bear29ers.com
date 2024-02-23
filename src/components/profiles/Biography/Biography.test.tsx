import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Biography from './Biography';

describe('src/components/profiles/Biography/Biography.test.tsx', () => {
  it('should render the Biography component', () => {
    const { getByRole } = render(<Biography />);
  });
});
