import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../messages/en.json';

import Ambition from './Ambition';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Ambition/Ambition.test.tsx', () => {
  const ambitions = {
    first: '💻 Learn higher level of Next.js and master Three.js.',
    second: '👬 Collaborate with other digital content creators.',
    third: '📝 Obtain qualifications in several engineering fields.',
    fourth: '🏋🏻 Lose weight and stay healthy.',
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Ambition />
      </NextIntlClientProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the first resolution text', () => {
    expect(screen.getByText(ambitions.first)).toBeInTheDocument();
  });

  it('should render the second resolution text', () => {
    expect(screen.getByText(ambitions.second)).toBeInTheDocument();
  });

  it('should render the third resolution text', () => {
    expect(screen.getByText(ambitions.third)).toBeInTheDocument();
  });

  it('should render the fourth resolution text', () => {
    expect(screen.getByText(ambitions.fourth)).toBeInTheDocument();
  });
});
