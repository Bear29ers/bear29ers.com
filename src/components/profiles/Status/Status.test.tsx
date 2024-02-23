import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PROFILE_TEXT } from '@/common/constants/about';

import Status from './Status';

import type { RenderResult } from '@testing-library/react';

describe('src/components/profiles/Biography/Biography.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Status />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the ProfileIcon', () => {
    expect(screen.getByAltText(PROFILE_TEXT.userName)).toBeInTheDocument();
  });

  it('should render the status icon', () => {
    expect(screen.getByText('🐻')).toBeInTheDocument();
  });

  it('should render full name', () => {
    expect(screen.getByText(PROFILE_TEXT.fullName)).toBeInTheDocument();
  });

  it('should render username', () => {
    expect(screen.getByText(PROFILE_TEXT.userName)).toBeInTheDocument();
  });

  it('should render the OrganizationIcon svg', () => {
    expect(screen.getByRole('img', { name: 'OrganizationIcon' })).toBeInTheDocument();
  });

  it('should render the LocationIcon svg', () => {
    expect(screen.getByRole('img', { name: 'LocationIcon' })).toBeInTheDocument();
  });

  it('should render the WebsiteIcon svg', () => {
    expect(screen.getByRole('img', { name: 'WebsiteIcon' })).toBeInTheDocument();
  });

  it('should render divided line', () => {
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('should render the YOLO achievement image', () => {
    expect(screen.getByAltText('Achievement: YOLO')).toBeInTheDocument();
  });

  it('should render the Quickdraw achievement image', () => {
    expect(screen.getByAltText('Achievement: Quickdraw')).toBeInTheDocument();
  });

  it('should render the Pull Shark achievement image', () => {
    expect(screen.getByAltText('Achievement: Pull Shark')).toBeInTheDocument();
  });

  it('should render the Arctic Code Vault Contributor achievement image', () => {
    expect(screen.getByAltText('Achievement: Arctic Code Vault Contributor')).toBeInTheDocument();
  });
});
