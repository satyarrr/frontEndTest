import { render, screen } from '@testing-library/react';
import GetSection from './view';
import userEvent from '@testing-library/user-event'

test('renders Post Section', async () => {

    render(<GetSection/>)
  // cari element button
  const button = screen.getByTestId("toggle");
  userEvent.click(button)
});