import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en.json';

import ProjectHighlight from './ProjectHighlight';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/projects/ProjectHighlight/ProjectHighlight.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <ProjectHighlight id={2} company="gakkenLeap" index={0} />
      </NextIntlClientProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the star emoji', () => {
    expect(screen.getByText('🌟')).toBeInTheDocument();
  });

  it('should render a highlight text', () => {
    expect(screen.getByText(messages.experience.highlightList.gakkenLeap[2][0] || '')).toBeInTheDocument();
  });
});
