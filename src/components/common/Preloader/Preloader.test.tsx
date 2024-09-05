import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Preloader from './Preloader';

import type { RenderResult } from '@testing-library/react';

describe('src/components/common/Preloader/Preloader.test.tsx', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Preloader />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render three loaders (circle, triangle, rectangle)', () => {
    const svgElements = renderResult.container.querySelectorAll('svg');
    expect(svgElements).toHaveLength(3);

    const circle = renderResult.container.querySelector('circle');
    expect(circle).toBeInTheDocument();

    const polygon = renderResult.container.querySelector('polygon');
    expect(polygon).toBeInTheDocument();

    const rect = renderResult.container.querySelector('rect');
    expect(rect).toBeInTheDocument();
  });

  it('should render circle loader with correct class and styles', () => {
    const circle = renderResult.container.querySelector('circle');

    expect(circle).toHaveClass('animate-pathCircle');
    expect(circle).toHaveStyle({ strokeDasharray: '150 50 150 50', strokeDashoffset: '75' });
  });

  it('should render triangle loader with correct class and styles', () => {
    const polygon = renderResult.container.querySelector('polygon');

    expect(polygon).toHaveClass('animate-pathTriangle');
    expect(polygon).toHaveStyle({ strokeDasharray: '145 76 145 76', strokeDashoffset: '0' });
  });

  it('should render rectangle loader with correct class and styles', () => {
    const rect = renderResult.container.querySelector('rect');

    expect(rect).toHaveClass('animate-pathRect');
    expect(rect).toHaveStyle({ strokeDasharray: '192 64 192 64', strokeDashoffset: '0' });
  });
});
