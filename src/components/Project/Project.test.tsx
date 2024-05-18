import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
    description: 'Description of the project.',
    highlightList: ['Highlight 1', 'Highlight 2'],
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Project project={projectData} />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  describe('Initial state', () => {
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
  });
});
