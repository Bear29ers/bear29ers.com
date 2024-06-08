import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PROFILE_TEXT } from '@/common/constants/about';

import Status from './Status';

import type { RenderResult } from '@testing-library/react';

const profileDetails = {
  organization: {
    icon: 'OrganizationIcon',
    text: 'Gakken LEAP Co.,Ltd',
  },
  location: {
    icon: 'LocationIcon',
    text: 'Tokyo, Japan',
  },
  website: {
    icon: 'WebsiteIcon',
    text: 'https://bear29ers.github.io',
  },
};

const teams = {
  dodgers: {
    name: 'Los Angeles Dodgers',
  },
  yankees: {
    name: 'New York Yankees',
  },
  jays: {
    name: 'Toronto Blue Jays',
  },
  giants: {
    name: 'Tokyo Yomiuri Giants',
  },
};

describe('src/components/profiles/Status/Status.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Status />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the profile image', () => {
    expect(screen.getByRole('img', { name: PROFILE_TEXT.userName })).toBeInTheDocument();
  });

  it('should render the fullname', () => {
    expect(screen.getByRole('heading', { level: 2, name: PROFILE_TEXT.fullName })).toBeInTheDocument();
  });

  it('should render the username', () => {
    expect(screen.getByRole('heading', { level: 4, name: PROFILE_TEXT.userName })).toBeInTheDocument();
  });

  it('should render the organization icon', () => {
    expect(screen.getByRole('img', { name: profileDetails.organization.icon })).toBeInTheDocument();
  });

  it('should render the organization information', () => {
    expect(screen.getByText(profileDetails.organization.text)).toBeInTheDocument();
  });

  it('should render the location icon', () => {
    expect(screen.getByRole('img', { name: profileDetails.location.icon })).toBeInTheDocument();
  });

  it('should render the location information', () => {
    expect(screen.getByText(profileDetails.location.text)).toBeInTheDocument();
  });

  it('should render the website icon', () => {
    expect(screen.getByRole('img', { name: profileDetails.website.icon })).toBeInTheDocument();
  });

  it('should render the website url', () => {
    expect(screen.getByText(profileDetails.website.text)).toBeInTheDocument();
  });

  it('should render the GithubIcon component', () => {
    expect(screen.getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
  });

  it('should render the InstagramIcon component', () => {
    expect(screen.getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
  });

  it('should render the FacebookIcon component', () => {
    expect(screen.getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
  });

  it('should render the ThreadsIcon component', () => {
    expect(screen.getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
  });

  it('should render the Los Angeles Dodgers icon', () => {
    expect(screen.getByRole('img', { name: teams.dodgers.name })).toBeInTheDocument();
  });

  it('should render the New York Yankees icon', () => {
    expect(screen.getByRole('img', { name: teams.yankees.name })).toBeInTheDocument();
  });

  it('should render the Toronto Blue Jays icon', () => {
    expect(screen.getByRole('img', { name: teams.jays.name })).toBeInTheDocument();
  });

  it('should render the Tokyo Yomiuri Giants icon', () => {
    expect(screen.getByRole('img', { name: teams.giants.name })).toBeInTheDocument();
  });
});
