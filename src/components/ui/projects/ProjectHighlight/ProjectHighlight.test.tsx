import { render, screen } from '@testing-library/react';

import ProjectHighlight from './ProjectHighlight';

import type { RenderResult } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => `translated.${key}`,
}));

describe('src/components/ui/projects/ProjectHighlight/ProjectHighlight.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ProjectHighlight id={2} company="gakkenLeap" index={0} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the star emoji', () => {
    expect(screen.getByText('🌟')).toBeInTheDocument();
  });

  it('should render a highlight message key', () => {
    expect(screen.getByText(/translated\.gakkenLeap\.2\.0/)).toBeInTheDocument();
  });
});
