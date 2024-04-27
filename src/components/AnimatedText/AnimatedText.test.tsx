import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import AnimatedText from './AnimatedText';

import type { RenderResult } from '@testing-library/react';

describe('src/components/AnimatedText/AnimatedText.test.tsx', () => {
  describe('when text props is "Hello World"', () => {
    let renderResult: RenderResult;
    const text = 'Hello World';

    beforeEach(() => {
      renderResult = render(<AnimatedText text={text} />);
    });

    afterEach(() => {
      renderResult.unmount();
    });

    it('should render the AnimatedText component with props text correctly', () => {
      const letters = screen.getAllByRole('heading', { level: 1 });
      expect(letters).toHaveLength(text.length);

      const renderedText = letters.map((letter) => letter.textContent).join('');
      expect(renderedText).toBe(text);
    });

    it('should apply correct styles on mouse move', async () => {
      const letters = screen.getAllByRole('heading', { level: 1 });
      const firstLetter = letters[0];

      fireEvent.mouseMove(firstLetter, { clientX: 100, clientY: 100 });

      await waitFor(() => {
        expect(firstLetter).not.toHaveStyle('font-weight: bold');
      });
      await waitFor(() => {
        expect(firstLetter).not.toHaveStyle('font-variation-settings: "wdth" 100');
      });
    });
  });
});
