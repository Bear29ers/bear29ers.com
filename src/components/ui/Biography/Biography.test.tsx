import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../messages/en.json';

import Biography from './Biography';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/Biography/Biography.test.tsx', () => {
  const greeting = 'Hi, there,';
  const occupation = "I'm a front-end developer and designer!!";
  const paragraphList = {
    first:
      "Hi, I'm Yuta Okuma, a front-end developer and designer with a passion for creating beautiful, functional, and user-centered digital experiences.",
    second:
      'I played baseball for about 9 years as a child, and now I just enjoy watching it. My favorite teams are the Los Angeles Dodgers and the New York Yankees.',
    third:
      'I first encountered video production in high school when I was active in the Japanese taiko drumming culb and began making simple video works, which I decided to study video in earnest.',
    fourth:
      'I lived in Chiba until I graduated from high school and moved to Kyoto for university, where I majored in the contents business at the faculty of Image Arts and Sciences while independently producing animated videos using Adobe AfterEffects.',
    fifth:
      'In 2017, I took a leave of absence from university to study abroad in Toronto, Canada for about a year. This was a very meaningful time and also the most enjoyable year of my life.',
    sixth:
      'Gradually became interested in programming through the influence of a friend of mine that I met at one of my internships and started learning on my own from front-end languages. started my career as a developer in 2020 and now I am working as a front-end developer in Tokyo.',
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Biography />
      </NextIntlClientProvider>
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the greeting text', () => {
    expect(screen.getByRole('heading', { level: 4, name: greeting })).toBeInTheDocument();
  });

  it('should render the occupation text', () => {
    expect(screen.getByRole('heading', { level: 3, name: occupation })).toBeInTheDocument();
  });

  it('should render the first paragraph of biography', () => {
    expect(screen.getByText(paragraphList.first)).toBeInTheDocument();
  });

  it('should render the second paragraph of biography', () => {
    expect(screen.getByText(paragraphList.second)).toBeInTheDocument();
  });

  it('should render the third paragraph of biography', () => {
    expect(screen.getByText(paragraphList.third)).toBeInTheDocument();
  });

  it('should render the fourth paragraph of biography', () => {
    expect(screen.getByText(paragraphList.fourth)).toBeInTheDocument();
  });

  it('should render the fifth paragraph of biography', () => {
    expect(screen.getByText(paragraphList.fifth)).toBeInTheDocument();
  });

  it('should render the sixth paragraph of biography', () => {
    expect(screen.getByText(paragraphList.sixth)).toBeInTheDocument();
  });
});
