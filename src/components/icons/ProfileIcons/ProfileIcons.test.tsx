import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LocationIcon, OrganizationIcon, WebsiteIcon } from './ProfileIcons';

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
});
