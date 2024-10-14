import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from './Modal';

describe('src/components/common/Modal/Modal.test.tsx', () => {
  it('should render the Modal component', () => {
    const { getByRole } = render(<Modal />);
  });
});
