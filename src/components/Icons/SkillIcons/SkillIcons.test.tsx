import { render } from '@testing-library/react';

import {
  AfterEffects,
  Atom,
  Aws,
  Babel,
  Bash,
  Bootstrap,
  Codepen,
  Css,
  Discord,
  Docker,
  Emotion,
  Express,
  Figma,
  Firebase,
  Gcp,
  Git,
  GitHub,
  GitHubActions,
  Html,
  Idea,
  Illustrator,
  JQuery,
  JavaScript,
  Jest,
  Laravel,
  Linux,
  Lua,
  Markdown,
  MaterialUi,
  MySql,
  Neovim,
  NextJs,
  NodeJs,
  NuxtJs,
  Photoshop,
  Php,
  Postman,
  PremierePro,
  ReactJs,
  Regex,
  Sass,
  Sentry,
  Sqlite,
  StackOverFlow,
  StyledComponents,
  Svg,
  Tailwind,
  ThreeJs,
  TypeScript,
  Vercel,
  Vim,
  Vite,
  Vscode,
  VueJs,
  Webpack,
  Xd,
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

  it('should render Regex svg component', () => {
    const { getByTestId } = render(<Regex />);
    expect(getByTestId('regex')).toBeInTheDocument();
  });

  it('should render PHP svg component', () => {
    const { getByTestId } = render(<Php />);
    expect(getByTestId('php')).toBeInTheDocument();
  });

  it('should render Laravel svg component', () => {
    const { getByTestId } = render(<Laravel />);
    expect(getByTestId('laravel')).toBeInTheDocument();
  });

  it('should render MySQL svg component', () => {
    const { getByTestId } = render(<MySql />);
    expect(getByTestId('mysql')).toBeInTheDocument();
  });

  it('should render SQLite svg component', () => {
    const { getByTestId } = render(<Sqlite />);
    expect(getByTestId('sqlite')).toBeInTheDocument();
  });

  it('should render Webpack svg component', () => {
    const { getByTestId } = render(<Webpack />);
    expect(getByTestId('webpack')).toBeInTheDocument();
  });

  it('should render Babel svg component', () => {
    const { getByTestId } = render(<Babel />);
    expect(getByTestId('babel')).toBeInTheDocument();
  });

  it('should render Docker svg component', () => {
    const { getByTestId } = render(<Docker />);
    expect(getByTestId('docker')).toBeInTheDocument();
  });

  it('should render Git svg component', () => {
    const { getByTestId } = render(<Git />);
    expect(getByTestId('git')).toBeInTheDocument();
  });

  it('should render GitHub svg component', () => {
    const { getByTestId } = render(<GitHub />);
    expect(getByTestId('github')).toBeInTheDocument();
  });

  it('should render GitHub Actions svg component', () => {
    const { getByTestId } = render(<GitHubActions />);
    expect(getByTestId('github-actions')).toBeInTheDocument();
  });

  it('should render AWS svg component', () => {
    const { getByTestId } = render(<Aws />);
    expect(getByTestId('aws')).toBeInTheDocument();
  });

  it('should render GCP svg component', () => {
    const { getByTestId } = render(<Gcp />);
    expect(getByTestId('gcp')).toBeInTheDocument();
  });

  it('should render Firebase svg component', () => {
    const { getByTestId } = render(<Firebase />);
    expect(getByTestId('firebase')).toBeInTheDocument();
  });

  it('should render Vim svg component', () => {
    const { getByTestId } = render(<Vim />);
    expect(getByTestId('vim')).toBeInTheDocument();
  });

  it('should render Neovim svg component', () => {
    const { getByTestId } = render(<Neovim />);
    expect(getByTestId('neovim')).toBeInTheDocument();
  });

  it('should render Linux svg component', () => {
    const { getByTestId } = render(<Linux />);
    expect(getByTestId('linux')).toBeInTheDocument();
  });

  it('should render Bash svg component', () => {
    const { getByTestId } = render(<Bash />);
    expect(getByTestId('bash')).toBeInTheDocument();
  });

  it('should render Lua svg component', () => {
    const { getByTestId } = render(<Lua />);
    expect(getByTestId('lua')).toBeInTheDocument();
  });

  it('should render Markdown svg component', () => {
    const { getByTestId } = render(<Markdown />);
    expect(getByTestId('markdown')).toBeInTheDocument();
  });

  it('should render SVG svg component', () => {
    const { getByTestId } = render(<Svg />);
    expect(getByTestId('svg')).toBeInTheDocument();
  });

  it('should render IDEA svg component', () => {
    const { getByTestId } = render(<Idea />);
    expect(getByTestId('idea')).toBeInTheDocument();
  });

  it('should render VSCode svg component', () => {
    const { getByTestId } = render(<Vscode />);
    expect(getByTestId('vscode')).toBeInTheDocument();
  });

  it('should render Atom svg component', () => {
    const { getByTestId } = render(<Atom />);
    expect(getByTestId('atom')).toBeInTheDocument();
  });

  it('should render Figma svg component', () => {
    const { getByTestId } = render(<Figma />);
    expect(getByTestId('figma')).toBeInTheDocument();
  });

  it('should render XD svg component', () => {
    const { getByTestId } = render(<Xd />);
    expect(getByTestId('xd')).toBeInTheDocument();
  });

  it('should render Photoshop svg component', () => {
    const { getByTestId } = render(<Photoshop />);
    expect(getByTestId('photoshop')).toBeInTheDocument();
  });

  it('should render Illustrator svg component', () => {
    const { getByTestId } = render(<Illustrator />);
    expect(getByTestId('illustrator')).toBeInTheDocument();
  });

  it('should render Premiere Pro svg component', () => {
    const { getByTestId } = render(<PremierePro />);
    expect(getByTestId('premiere-pro')).toBeInTheDocument();
  });

  it('should render AfterEffects svg component', () => {
    const { getByTestId } = render(<AfterEffects />);
    expect(getByTestId('aftereffects')).toBeInTheDocument();
  });

  it('should render Postman svg component', () => {
    const { getByTestId } = render(<Postman />);
    expect(getByTestId('postman')).toBeInTheDocument();
  });

  it('should render Sentry svg component', () => {
    const { getByTestId } = render(<Sentry />);
    expect(getByTestId('sentry')).toBeInTheDocument();
  });

  // Codepen
  it('should render Codepen svg component', () => {
    const { getByTestId } = render(<Codepen />);
    expect(getByTestId('codepen')).toBeInTheDocument();
  });

  it('should render Stack Overflow svg component', () => {
    const { getByTestId } = render(<StackOverFlow />);
    expect(getByTestId('stack-overflow')).toBeInTheDocument();
  });

  it('should render Discord svg component', () => {
    const { getByTestId } = render(<Discord />);
    expect(getByTestId('discord')).toBeInTheDocument();
  });
});
