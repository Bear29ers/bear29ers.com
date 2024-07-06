import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StaggeredText from './StaggeredText';

describe('src/components/ui/gallery/StaggeredText/StaggeredText.test.tsx', () => {
  it('should render the StaggeredText component', () => {
    const { getByRole } = render(<StaggeredText textList={['sample', 'text', 'list']} />);
  });
});
