import { render } from '@testing-library/react';

import ContentsLayout from './ContentsLayout';

describe('src/components/ContentsLayout/ContentsLayout.test.tsx', () => {
  it('should render ContentsLayout component', () => {
    const { getByRole } = render(
      <ContentsLayout className="">
        <div>ContentsLayout</div>
      </ContentsLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });

  it('should render ContentsLayout component without className props', () => {
    const { getByRole } = render(
      <ContentsLayout>
        <div>ContentsLayout</div>
      </ContentsLayout>
    );
    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
