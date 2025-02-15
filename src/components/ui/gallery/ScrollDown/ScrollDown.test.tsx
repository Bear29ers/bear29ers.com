import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import ScrollDown from './ScrollDown';

describe('src/components/ui/gallery/ScrollDown/ScrollDown.test.tsx', () => {
  const mockSetState = jest.fn();
  const themeColor = 'Red';

  describe('when state is false', () => {
    it('should render the scroll down button', () => {
      render(<ScrollDown state={false} setState={mockSetState} themeColor={themeColor} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should calls setState when the button is clicked', async () => {
      render(<ScrollDown state={false} setState={mockSetState} themeColor={themeColor} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith(true);
      });
    });
  });

  describe('when state is true', () => {
    it('should have opacity 0 with the scroll down button', async () => {
      render(<ScrollDown state setState={jest.fn()} themeColor={themeColor} />);
      await waitFor(() => {
        expect(screen.getByRole('button')).toHaveStyle('opacity: 0');
      });
    });
  });
});
