import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Subhead from './Subhead';

describe('src/components/ui/gallery/Subhead/Subhead.test.tsx', () => {
  it('should render the Subhead text', async () => {
    render(<Subhead text="subhead text" />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 2, name: 'subhead text' })).toBeInTheDocument();
    });
  });
});
