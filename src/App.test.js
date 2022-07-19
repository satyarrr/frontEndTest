import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react DOM', async () => {
  render(<App />);
  const linkElement = screen.getByText("React Axios POST");
  expect(linkElement).toBeInTheDocument();

  const linkElement1 = await screen.findByText("React Axios GET");
  expect(linkElement1).toBeInTheDocument();
});