import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import LocaleSwitch from './LocaleSwitch';

describe('src/components/common/LocaleSwitch/LocaleSwitch.test.tsx', () => {
  it('should render the LocaleSwitch component', () => {
    const { getByRole } = render(<LocaleSwitch />);
  });
});
