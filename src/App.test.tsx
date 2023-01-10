import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('renders learn react link', () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })

  it("should render todo text", () => {
    render(<App />)

    expect(screen.getByText("This is todo App"))
      .toBeInTheDocument()
  })
})
