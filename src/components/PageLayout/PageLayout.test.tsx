import { render } from '@testing-library/react';

import PageLayout from './PageLayout';

describe('src/components/PageLayout/PageLayout.test.tsx', () => {
  it('should render PageLayout component', () => {
    const { getByRole } = render(
      <PageLayout>
        <div>PageLayout</div>
      </PageLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
