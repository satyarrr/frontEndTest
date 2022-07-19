import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText("React Axios POST");
  expect(linkElement).toBeInTheDocument();
});