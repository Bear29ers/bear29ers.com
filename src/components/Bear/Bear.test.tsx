import { render } from '@testing-library/react';

import Bear from './Bear';

describe('src/components/Bear/Bear.test.tsx', () => {
  // TODO: テストを書く → クリックテストも必要
  it('should render Bear component', () => {
    const { getByRole } = render(<Bear />);
  });
});
