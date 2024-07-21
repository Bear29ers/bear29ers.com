import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import StaggeredText from './StaggeredText';

describe('src/components/ui/gallery/StaggeredText/StaggeredText.test.tsx', () => {
  it('should render the staggered heading letters', async () => {
    render(<StaggeredText textList={['sample', 'text', 'list']} />);
    await waitFor(() => {
      expect(screen.getAllByRole('heading', { level: 1, name: 's' })).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByRole('heading', { level: 1, name: 't' })).toHaveLength(3);
    });
  });
});
