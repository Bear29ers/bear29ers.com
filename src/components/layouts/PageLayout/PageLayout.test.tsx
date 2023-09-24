import { render } from '@testing-library/react';

import PageLayout from './PageLayout';

describe('src/components/PageLayout/PageLayout.test.tsx', () => {
  it('should render PageLayout component that is not Home page', () => {
    const { getByRole } = render(
      <PageLayout isNotHome={false}>
        <div>PageLayout</div>
      </PageLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });

  it('should render PageLayout component that is Home page', () => {
    const { getByRole } = render(
      <PageLayout isNotHome>
        <div>PageLayout</div>
      </PageLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });

  it('should render PageLayout component with Navbar', () => {
    const { getByRole } = render(
      <PageLayout isNotHome>
        <div>PageLayout</div>
      </PageLayout>
    );
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('should render PageLayout component with Footer', () => {
    const { getByRole } = render(
      <PageLayout isNotHome>
        <div>PageLayout</div>
      </PageLayout>
    );
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
