import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import {
  AWSIcon,
  AfterEffectsIcon,
  AppleIcon,
  AtomIcon,
  BabelIcon,
  BashIcon,
  BootstrapIcon,
  CSSIcon,
  CodepenIcon,
  DiscordIcon,
  DockerIcon,
  EmotionIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitHubActionsIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  IllustratorIcon,
  JQueryIcon,
  JavaScriptIcon,
  JestIcon,
  LaravelIcon,
  LinuxIcon,
  LuaIcon,
  MarkdownIcon,
  MaterialUIIcon,
  MySQLIcon,
  NeovimIcon,
  NextJsIcon,
  NodeJsIcon,
  NpmIcon,
  NuxtJsIcon,
  PHPIcon,
  PhotoshopIcon,
  PiniaIcon,
  PnpmIcon,
  PostmanIcon,
  PremiereProIcon,
  ReactIcon,
  RegexIcon,
  SQLiteIcon,
  SVGIcon,
  SassIcon,
  SentryIcon,
  StackOverflowIcon,
  StyledComponentsIcon,
  TailwindCSSIcon,
  ThreeJsIcon,
  TypeScriptIcon,
  VSCodeIcon,
  VercelIcon,
  VimIcon,
  ViteIcon,
  VitestIcon,
  VueJsIcon,
  WebStormIcon,
  WebpackIcon,
  XDIcon,
} from './SkillIcons';

describe('src/components/icons/SkillIcons/SkillIcons.test.tsx', () => {
  it('should render the HTMLIcon component', () => {
    render(<HTMLIcon />);
    expect(screen.getByRole('img', { name: 'HTMLIcon' })).toBeInTheDocument();
  });

  it('should render the CSSIcon component', () => {
    render(<CSSIcon />);
    expect(screen.getByRole('img', { name: 'CSSIcon' })).toBeInTheDocument();
  });

  it('should render the SassIcon component', () => {
    render(<SassIcon />);
    expect(screen.getByRole('img', { name: 'SassIcon' })).toBeInTheDocument();
  });

  it('should render the Bootstrap component', () => {
    render(<BootstrapIcon />);
    expect(screen.getByRole('img', { name: 'BootstrapIcon' })).toBeInTheDocument();
  });

  it('should render the TailwindCSSIcon component', () => {
    render(<TailwindCSSIcon />);
    expect(screen.getByRole('img', { name: 'TailwindCSSIcon' })).toBeInTheDocument();
  });

  it('should render the JavaScript component', () => {
    render(<JavaScriptIcon />);
    expect(screen.getByRole('img', { name: 'JavaScriptIcon' })).toBeInTheDocument();
  });

  it('should render the TypeScriptIcon component', () => {
    render(<TypeScriptIcon />);
    expect(screen.getByRole('img', { name: 'TypeScriptIcon' })).toBeInTheDocument();
  });

  it('should render the JQueryIcon component', () => {
    render(<JQueryIcon />);
    expect(screen.getByRole('img', { name: 'JQueryIcon' })).toBeInTheDocument();
  });

  it('should render the ThreeJsIcon component', () => {
    render(<ThreeJsIcon />);
    expect(screen.getByRole('img', { name: 'ThreeJsIcon' })).toBeInTheDocument();
  });

  it('should render the ReactIcon component', () => {
    render(<ReactIcon />);
    expect(screen.getByRole('img', { name: 'ReactIcon' })).toBeInTheDocument();
  });

  it('should render the StyledComponentsIcon component', () => {
    render(<StyledComponentsIcon />);
    expect(screen.getByRole('img', { name: 'StyledComponentsIcon' })).toBeInTheDocument();
  });

  it('should render the EmotionIcon component', () => {
    render(<EmotionIcon />);
    expect(screen.getByRole('img', { name: 'EmotionIcon' })).toBeInTheDocument();
  });

  it('should render the MaterialUIIcon component', () => {
    render(<MaterialUIIcon />);
    expect(screen.getByRole('img', { name: 'MaterialUIIcon' })).toBeInTheDocument();
  });

  it('should render the NextJsIcon component', () => {
    render(<NextJsIcon />);
    expect(screen.getByRole('img', { name: 'NextJsIcon' })).toBeInTheDocument();
  });

  it('should render the VercelIcon component', () => {
    render(<VercelIcon />);
    expect(screen.getByRole('img', { name: 'VercelIcon' })).toBeInTheDocument();
  });

  it('should render the VueJsIcon component', () => {
    render(<VueJsIcon />);
    expect(screen.getByRole('img', { name: 'VueJsIcon' })).toBeInTheDocument();
  });

  it('should render the NuxtJsIcon component', () => {
    render(<NuxtJsIcon />);
    expect(screen.getByRole('img', { name: 'NuxtJsIcon' })).toBeInTheDocument();
  });

  it('should render the PiniaIcon component', () => {
    render(<PiniaIcon />);
    expect(screen.getByRole('img', { name: 'PiniaIcon' })).toBeInTheDocument();
  });

  it('should render the NodeJsIcon component', () => {
    render(<NodeJsIcon />);
    expect(screen.getByRole('img', { name: 'NodeJsIcon' })).toBeInTheDocument();
  });

  it('should render the ExpressIcon component', () => {
    render(<ExpressIcon />);
    expect(screen.getByRole('img', { name: 'ExpressIcon' })).toBeInTheDocument();
  });

  it('should render the WebpackIcon component', () => {
    render(<WebpackIcon />);
    expect(screen.getByRole('img', { name: 'WebpackIcon' })).toBeInTheDocument();
  });

  it('should render the ViteIcon component', () => {
    render(<ViteIcon />);
    expect(screen.getByRole('img', { name: 'ViteIcon' })).toBeInTheDocument();
  });

  it('should render the JestIcon component', () => {
    render(<JestIcon />);
    expect(screen.getByRole('img', { name: 'JestIcon' })).toBeInTheDocument();
  });

  it('should render the VitestIcon component', () => {
    render(<VitestIcon />);
    expect(screen.getByRole('img', { name: 'VitestIcon' })).toBeInTheDocument();
  });

  it('should render the BabelIcon component', () => {
    render(<BabelIcon />);
    expect(screen.getByRole('img', { name: 'BabelIcon' })).toBeInTheDocument();
  });

  it('should render the RegexIcon component', () => {
    render(<RegexIcon />);
    expect(screen.getByRole('img', { name: 'RegexIcon' })).toBeInTheDocument();
  });

  it('should render the NpmIcon component', () => {
    render(<NpmIcon />);
    expect(screen.getByRole('img', { name: 'NpmIcon' })).toBeInTheDocument();
  });

  it('should render the PnpmIcon component', () => {
    render(<PnpmIcon />);
    expect(screen.getByRole('img', { name: 'PnpmIcon' })).toBeInTheDocument();
  });

  it('should render the PHPIcon component', () => {
    render(<PHPIcon />);
    expect(screen.getByRole('img', { name: 'PHPIcon' })).toBeInTheDocument();
  });

  it('should render the LaravelIcon component', () => {
    render(<LaravelIcon />);
    expect(screen.getByRole('img', { name: 'LaravelIcon' })).toBeInTheDocument();
  });

  it('should render the MySQLIcon component', () => {
    render(<MySQLIcon />);
    expect(screen.getByRole('img', { name: 'MySQLIcon' })).toBeInTheDocument();
  });

  it('should render the SQLiteIcon component', () => {
    render(<SQLiteIcon />);
    expect(screen.getByRole('img', { name: 'SQLiteIcon' })).toBeInTheDocument();
  });

  it('should render the DockerIcon component', () => {
    render(<DockerIcon />);
    expect(screen.getByRole('img', { name: 'DockerIcon' })).toBeInTheDocument();
  });

  it('should render the GitIcon component', () => {
    render(<GitIcon />);
    expect(screen.getByRole('img', { name: 'GitIcon' })).toBeInTheDocument();
  });

  it('should render the GitHubIcon component', () => {
    render(<GitHubIcon />);
    expect(screen.getByRole('img', { name: 'GitHubIcon' })).toBeInTheDocument();
  });

  it('should render the GitHubActionsIcon component', () => {
    render(<GitHubActionsIcon />);
    expect(screen.getByRole('img', { name: 'GitHubActionsIcon' })).toBeInTheDocument();
  });

  it('should render the AWSIcon component', () => {
    render(<AWSIcon />);
    expect(screen.getByRole('img', { name: 'AWSIcon' })).toBeInTheDocument();
  });

  it('should render the FirebaseIcon component', () => {
    render(<FirebaseIcon />);
    expect(screen.getByRole('img', { name: 'FirebaseIcon' })).toBeInTheDocument();
  });

  it('should render the VimIcon component', () => {
    render(<VimIcon />);
    expect(screen.getByRole('img', { name: 'VimIcon' })).toBeInTheDocument();
  });

  it('should render the NeovimIcon component', () => {
    render(<NeovimIcon />);
    expect(screen.getByRole('img', { name: 'NeovimIcon' })).toBeInTheDocument();
  });

  it('should render the LinuxIcon component', () => {
    render(<LinuxIcon />);
    expect(screen.getByRole('img', { name: 'LinuxIcon' })).toBeInTheDocument();
  });

  it('should render the BashIcon component', () => {
    render(<BashIcon />);
    expect(screen.getByRole('img', { name: 'BashIcon' })).toBeInTheDocument();
  });

  it('should render the LuaIcon component', () => {
    render(<LuaIcon />);
    expect(screen.getByRole('img', { name: 'LuaIcon' })).toBeInTheDocument();
  });

  it('should render the MarkdownIcon component', () => {
    render(<MarkdownIcon />);
    expect(screen.getByRole('img', { name: 'MarkdownIcon' })).toBeInTheDocument();
  });

  it('should render the SVGIcon component', () => {
    render(<SVGIcon />);
    expect(screen.getByRole('img', { name: 'SVGIcon' })).toBeInTheDocument();
  });

  it('should render the WebStormIcon component', () => {
    render(<WebStormIcon />);
    expect(screen.getByRole('img', { name: 'WebStormIcon' })).toBeInTheDocument();
  });

  it('should render the VSCodeIcon component', () => {
    render(<VSCodeIcon />);
    expect(screen.getByRole('img', { name: 'VSCodeIcon' })).toBeInTheDocument();
  });

  it('should render the AtomIcon component', () => {
    render(<AtomIcon />);
    expect(screen.getByRole('img', { name: 'AtomIcon' })).toBeInTheDocument();
  });

  it('should render the FigmaIcon component', () => {
    render(<FigmaIcon />);
    expect(screen.getByRole('img', { name: 'FigmaIcon' })).toBeInTheDocument();
  });

  it('should render the XDIcon component', () => {
    render(<XDIcon />);
    expect(screen.getByRole('img', { name: 'XDIcon' })).toBeInTheDocument();
  });

  it('should render the PhotoshopIcon  component', () => {
    render(<PhotoshopIcon />);
    expect(screen.getByRole('img', { name: 'PhotoshopIcon' })).toBeInTheDocument();
  });

  it('should render the IllustratorIcon component', () => {
    render(<IllustratorIcon />);
    expect(screen.getByRole('img', { name: 'IllustratorIcon' })).toBeInTheDocument();
  });

  it('should render the PremiereProIcon component', () => {
    render(<PremiereProIcon />);
    expect(screen.getByRole('img', { name: 'PremiereProIcon' })).toBeInTheDocument();
  });

  it('should render the AfterEffectsIcon component', () => {
    render(<AfterEffectsIcon />);
    expect(screen.getByRole('img', { name: 'AfterEffectsIcon' })).toBeInTheDocument();
  });

  it('should render the PostmanIcon component', () => {
    render(<PostmanIcon />);
    expect(screen.getByRole('img', { name: 'PostmanIcon' })).toBeInTheDocument();
  });

  it('should render the SentryIcon component', () => {
    render(<SentryIcon />);
    expect(screen.getByRole('img', { name: 'SentryIcon' })).toBeInTheDocument();
  });

  it('should render the CodepenIcon component', () => {
    render(<CodepenIcon />);
    expect(screen.getByRole('img', { name: 'CodepenIcon' })).toBeInTheDocument();
  });

  it('should render the StackOverflowIcon component', () => {
    render(<StackOverflowIcon />);
    expect(screen.getByRole('img', { name: 'StackOverflowIcon' })).toBeInTheDocument();
  });

  it('should render the DiscordIcon component', () => {
    render(<DiscordIcon />);
    expect(screen.getByRole('img', { name: 'DiscordIcon' })).toBeInTheDocument();
  });

  it('should render the AppleIcon component', () => {
    render(<AppleIcon />);
    expect(screen.getByRole('img', { name: 'AppleIcon' })).toBeInTheDocument();
  });
});
