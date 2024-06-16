import { render, screen } from '@testing-library/react';

import { LocationIcon, OrganizationIcon, PencilIcon, WavingHand, WebsiteIcon } from './ProfileIcons';

describe('src/components/icons/ProfileIcons/ProfileIcons.test.tsx', () => {
  it('should render the OrganizationIcon svg', () => {
    render(<OrganizationIcon />);
    expect(screen.getByRole('img', { name: 'OrganizationIcon' })).toBeInTheDocument();
  });

  it('should render the LocationIcon svg', () => {
    render(<LocationIcon />);
    expect(screen.getByRole('img', { name: 'LocationIcon' })).toBeInTheDocument();
  });

  it('should render the WebsiteIcon svg', () => {
    render(<WebsiteIcon />);
    expect(screen.getByRole('img', { name: 'WebsiteIcon' })).toBeInTheDocument();
  });

  it('should render the PencilIcon svg', () => {
    render(<PencilIcon />);
    expect(screen.getByRole('img', { name: 'PencilIcon' })).toBeInTheDocument();
  });

  it('should render the Waving hand animation', () => {
    render(<WavingHand />);
    expect(screen.getByText('👋🏻')).toBeInTheDocument();
  });
});
