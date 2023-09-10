import { render } from '@testing-library/react';

import TopContentsLayout from './TopContentsLayout';

describe('src/components/TopContentsLayout/TopContentsLayout.test.tsx', () => {
  it('should render ContentsLayout component', () => {
    const { getByRole } = render(
      <TopContentsLayout>
        <div>TopContentsLayout</div>
      </TopContentsLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
