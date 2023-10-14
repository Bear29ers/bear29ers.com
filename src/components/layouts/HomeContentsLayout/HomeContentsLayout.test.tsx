import { render } from '@testing-library/react';

import HomeContentsLayout from './HomeContentsLayout';

describe('src/components/TopContentsLayout/TopContentsLayout.test.tsx', () => {
  it('should render ContentsLayout component', () => {
    const { getByRole } = render(
      <HomeContentsLayout>
        <div>TopContentsLayout</div>
      </HomeContentsLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
