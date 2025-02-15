import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../messages/en.json';

import Project from './Project';

import type { RenderResult } from '@testing-library/react';

describe('src/components/ui/Project/Project.test.tsx', () => {
  const projectData = {
    id: 2,
    startAt: '2022.1',
    endAt: '2023.12',
    role: 'frontend',
    company: 'gakkenLeap',
    location: 'tokyo',
    tagList: ['React', 'Node.js', 'TypeScript'],
    description: [0, 1],
    highlightList: [0, 1],
  };

  const descriptionList = [
    'I joined an existing service aimed at elementary and junior high school students. I am in charge of development with another backend engineer, and we are mainly involved in maintenance and operation while also working to improve the service.',
    'Current issues include the fact that the foundation for frontend testing has not been established and package versions are out of date.',
  ];

  const highlightList = ['Upgrading Next.js from 12 to 14', 'The foundation of frontend testing'];

  describe('initial state', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <Project project={projectData} />
        </NextIntlClientProvider>
      );
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
      expect(screen.getByRole('heading', { level: 2, name: 'Frontend Developer' })).toBeInTheDocument();
    });

    it('should render the company and its icon', () => {
      expect(screen.getByText('Gakken LEAP Co.,Ltd')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'OrganizationIcon' })).toBeInTheDocument();
    });

    it('should render the location and its icon', () => {
      expect(screen.getByText('Tokyo, Japan')).toBeInTheDocument();
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
      descriptionList.forEach((description) => {
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    });

    it('should render all highlights', () => {
      highlightList.forEach((highlight) => {
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
      renderResult = render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <Project project={projectData} />
        </NextIntlClientProvider>
      );
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the container with #2C3641 background color', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('project-container')).toHaveStyle('backgroundColor: #2C3641');
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
