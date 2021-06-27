import { render, screen } from '@testing-library/react';
import Root from './Root';

test('it renders!', () => {
  render(<Root />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
