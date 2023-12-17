import { render } from '@testing-library/react';

import Icon from './Icon';

describe('src/components/Icon/Icon.test.tsx', () => {
  describe('render the GithubIcon component', () => {
    it('should render the GithubIcon component with props that isClicked is true', () => {
      const { getByRole } = render(<Icon iconName="github" isClicked />);
      expect(getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
    });

    it('should render the GithubIcon component with props that isClicked is false', () => {
      const { getByRole } = render(<Icon iconName="github" isClicked={false} />);
      expect(getByRole('img', { name: 'GithubIcon' })).toBeInTheDocument();
    });
  });

  describe('render the InstagramIcon component', () => {
    it('should render the Instagram component with props that isClicked is true', () => {
      const { getByRole } = render(<Icon iconName="instagram" isClicked />);
      expect(getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
    });

    it('should have style that fill is #D2D8D9 with the GithubIcon component when isClicked props is true', () => {
      const { getByRole } = render(<Icon iconName="github" isClicked />);
      expect(getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #D2D8D9');
    });

    it('should render the Instagram component with props that isClicked is false', () => {
      const { getByRole } = render(<Icon iconName="instagram" isClicked={false} />);
      expect(getByRole('img', { name: 'InstagramIcon' })).toBeInTheDocument();
    });

    it('should have style that fill is #000 with the GithubIcon component when isClicked props is true', () => {
      const { getByRole } = render(<Icon iconName="github" isClicked={false} />);
      expect(getByRole('img', { name: 'GithubIcon' }).querySelector('path')).toHaveStyle('fill: #000');
    });
  });

  describe('render the ThreadsIcon component', () => {
    it('should render the TheadsIcon component with props that isClicked is true', () => {
      const { getByRole } = render(<Icon iconName="threads" isClicked />);
      expect(getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
    });

    it('should have style that icon background fill is #D2D8D9 with the ThreadsIcon component when isClicked props is true', () => {
      const { getByTestId } = render(<Icon iconName="threads" isClicked />);
      expect(getByTestId('threads-background')).toHaveStyle('fill: #D2D8D9');
    });

    it('should have style that icon logo fill is #000 with the ThreadsIcon component when isClicked props is true', () => {
      const { getByTestId } = render(<Icon iconName="threads" isClicked />);
      expect(getByTestId('threads-logo')).toHaveStyle('fill: #000');
    });

    it('should render the TheadsIcon component with props that isClicked is false', () => {
      const { getByRole } = render(<Icon iconName="threads" isClicked={false} />);
      expect(getByRole('img', { name: 'ThreadsIcon' })).toBeInTheDocument();
    });

    it('should have style that icon background fill is #000 with the ThreadsIcon component when isClicked props is false', () => {
      const { getByTestId } = render(<Icon iconName="threads" isClicked={false} />);
      expect(getByTestId('threads-background')).toHaveStyle('fill: #000');
    });

    it('should have style that icon logo fill is #D2D8D9 with the ThreadsIcon component when isClicked props is false', () => {
      const { getByTestId } = render(<Icon iconName="threads" isClicked={false} />);
      expect(getByTestId('threads-logo')).toHaveStyle('fill: #D2D8D9');
    });
  });

  describe('render the FacebookIcon component', () => {
    it('should render the FacebookIcon component with props that isClicked is true', () => {
      const { getByRole } = render(<Icon iconName="facebook" isClicked />);
      expect(getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
    });

    it('should render the FacebookIcon component with props that isClicked is false', () => {
      const { getByRole } = render(<Icon iconName="facebook" isClicked={false} />);
      expect(getByRole('img', { name: 'FacebookIcon' })).toBeInTheDocument();
    });
  });
});
