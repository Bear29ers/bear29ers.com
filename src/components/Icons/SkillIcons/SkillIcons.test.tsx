import { render } from '@testing-library/react';

import {
  Bootstrap,
  Css,
  Emotion,
  Express,
  Html,
  JQuery,
  JavaScript,
  Jest,
  MaterialUi,
  NextJs,
  NodeJs,
  NuxtJs,
  ReactJs,
  Sass,
  StyledComponents,
  Tailwind,
  ThreeJs,
  TypeScript,
  Vercel,
  Vite,
  VueJs,
} from './SkillIcons';

describe('src/components/Icons/SkillIcons/SkillIcons.test.tsx', () => {
  it('should render HTML svg component', () => {
    const { getByTestId } = render(<Html />);
    expect(getByTestId('html')).toBeInTheDocument();
  });

  it('should render CSS svg component', () => {
    const { getByTestId } = render(<Css />);
    expect(getByTestId('css')).toBeInTheDocument();
  });

  it('should render Sass svg component', () => {
    const { getByTestId } = render(<Sass />);
    expect(getByTestId('sass')).toBeInTheDocument();
  });

  it('should render Bootstrap svg component', () => {
    const { getByTestId } = render(<Bootstrap />);
    expect(getByTestId('bootstrap')).toBeInTheDocument();
  });

  it('should render Tailwind svg component', () => {
    const { getByTestId } = render(<Tailwind />);
    expect(getByTestId('tailwind')).toBeInTheDocument();
  });

  it('should render JavaScript svg component', () => {
    const { getByTestId } = render(<JavaScript />);
    expect(getByTestId('javascript')).toBeInTheDocument();
  });

  it('should render TypeScript svg component', () => {
    const { getByTestId } = render(<TypeScript />);
    expect(getByTestId('typescript')).toBeInTheDocument();
  });

  it('should render jQuery svg component', () => {
    const { getByTestId } = render(<JQuery />);
    expect(getByTestId('jquery')).toBeInTheDocument();
  });

  it('should render Three.js svg component', () => {
    const { getByTestId } = render(<ThreeJs />);
    expect(getByTestId('threejs')).toBeInTheDocument();
  });

  it('should render React svg component', () => {
    const { getByTestId } = render(<ReactJs />);
    expect(getByTestId('react')).toBeInTheDocument();
  });

  it('should render styled-components svg component', () => {
    const { getByTestId } = render(<StyledComponents />);
    expect(getByTestId('styled-components')).toBeInTheDocument();
  });

  it('should render Emotion svg component', () => {
    const { getByTestId } = render(<Emotion />);
    expect(getByTestId('emotion')).toBeInTheDocument();
  });

  it('should render Material UI svg component', () => {
    const { getByTestId } = render(<MaterialUi />);
    expect(getByTestId('material-ui')).toBeInTheDocument();
  });

  it('should render Next.js svg component', () => {
    const { getByTestId } = render(<NextJs />);
    expect(getByTestId('nextjs')).toBeInTheDocument();
  });

  it('should render Vercel svg component', () => {
    const { getByTestId } = render(<Vercel />);
    expect(getByTestId('vercel')).toBeInTheDocument();
  });

  it('should render Vue.js svg component', () => {
    const { getByTestId } = render(<VueJs />);
    expect(getByTestId('vuejs')).toBeInTheDocument();
  });

  it('should render Nuxt.js svg component', () => {
    const { getByTestId } = render(<NuxtJs />);
    expect(getByTestId('nuxtjs')).toBeInTheDocument();
  });

  it('should render Vite svg component', () => {
    const { getByTestId } = render(<Vite />);
    expect(getByTestId('vite')).toBeInTheDocument();
  });

  it('should render Node.js svg component', () => {
    const { getByTestId } = render(<NodeJs />);
    expect(getByTestId('nodejs')).toBeInTheDocument();
  });

  it('should render Express svg component', () => {
    const { getByTestId } = render(<Express />);
    expect(getByTestId('express')).toBeInTheDocument();
  });

  it('should render Jest svg component', () => {
    const { getByTestId } = render(<Jest />);
    expect(getByTestId('jest')).toBeInTheDocument();
  });
});
