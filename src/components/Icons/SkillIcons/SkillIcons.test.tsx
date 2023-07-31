import { render } from '@testing-library/react';

import {
  Bootstrap,
  Css,
  Emotion,
  Html,
  JQuery,
  JavaScript,
  MaterialUi,
  NextJs,
  ReactJs,
  Sass,
  StyledComponents,
  Tailwind,
  ThreeJs,
  TypeScript,
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

  it('should render Tailwind svg component', () => {
    const { getByTestId } = render(<Tailwind />);
    expect(getByTestId('tailwind')).toBeInTheDocument();
  });

  it('should render Bootstrap svg component', () => {
    const { getByTestId } = render(<Bootstrap />);
    expect(getByTestId('bootstrap')).toBeInTheDocument();
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
});
