import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Project from './Project';

import type { RenderResult } from '@testing-library/react';

describe('src/components/Project/Project.test.tsx', () => {
  const projectData = {
    id: 1,
    startAt: '2022.1',
    endAt: '2023.12',
    role: 'Software Engineer',
    company: 'Acme Inc.',
    location: 'New York, US',
    tagList: ['React', 'Node.js', 'TypeScript'],
    description: ['Description of the project.', 'or description of the company'],
    highlightList: ['Highlight 1', 'Highlight 2'],
  };

  describe('initial state', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Project project={projectData} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the container with #232A36 background color', () => {
      expect(screen.getByTestId('project-container')).toBeInTheDocument();
      expect(screen.getByTestId('project-container')).toHaveStyle('backgroundColor: #232A36');
    });

    it('should render the period', () => {
      expect(screen.getByText(projectData.startAt)).toBeInTheDocument();
      expect(screen.getByText(projectData.endAt)).toBeInTheDocument();
    });

    it('should render the role', () => {
      expect(screen.getByRole('heading', { level: 2, name: projectData.role })).toBeInTheDocument();
    });

    it('should render the company and its icon', () => {
      expect(screen.getByText(projectData.company)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'OrganizationIcon' })).toBeInTheDocument();
    });

    it('should render the location and its icon', () => {
      expect(screen.getByText(projectData.location)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'LocationIcon' })).toBeInTheDocument();
    });

    it('should render all tags', () => {
      projectData.tagList.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('should render the Show More button', () => {
      expect(screen.getByRole('button', { name: 'Show More' })).toBeInTheDocument();
    });

    it('should render the all description', () => {
      projectData.description.forEach((description) => {
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    });

    it('should render all highlights', () => {
      projectData.highlightList.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      });
    });

    it('should render the description and the highlights section with height 0 style', () => {
      expect(screen.getByTestId('project-info-more')).toBeInTheDocument();
      expect(screen.getByTestId('project-info-more')).toHaveStyle('height: 0');
    });
  });

  describe('when click the Show More button', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(<Project project={projectData} />);
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the container with #29313D background color', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('project-container')).toHaveStyle('backgroundColor: #29313D');
      });
    });

    it('should change button text to Show Less', () => {
      expect(screen.getByRole('button', { name: 'Show Less' })).toBeInTheDocument();
    });

    it('should render the description and the highlights section with height auto style', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('project-info-more')).toHaveStyle('height: auto');
      });
    });
  });
});
