import { render } from '@testing-library/react';

import LanguagesTools from './LanguagesTools';

describe('src/components/LanguagesTools/LanguagesTools.test.tsx', () => {
  it('should render LanguagesTools component', () => {
    const { getByTestId } = render(<LanguagesTools />);
    expect(getByTestId('languages-tools')).toBeInTheDocument();
  });

  it('should have correct number of squares', () => {
    const { getAllByTestId } = render(<LanguagesTools />);
    expect(getAllByTestId(/^square-\d+-\d+$/)).toHaveLength(16);
  });
});
