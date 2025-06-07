import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../messages/en.json';

import Ambition from './Ambition';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Ambition/Ambition.test.tsx', () => {
  const ambitions = {
    first: 'Become more knowledgeable about front-end technologies in general.',
    second: 'Acquire skills in UI/UX.',
    third: 'Study WebGL.',
    fourth: 'Stay healthy.',
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
    expect(screen.getByText((content: string) => content.includes(ambitions.first))).toBeInTheDocument();
  });

  it('should render the second resolution text', () => {
    expect(screen.getByText((content: string) => content.includes(ambitions.second))).toBeInTheDocument();
  });

  it('should render the third resolution text', () => {
    expect(screen.getByText((content: string) => content.includes(ambitions.third))).toBeInTheDocument();
  });

  it('should render the fourth resolution text', () => {
    expect(screen.getByText((content: string) => content.includes(ambitions.fourth))).toBeInTheDocument();
  });
});
