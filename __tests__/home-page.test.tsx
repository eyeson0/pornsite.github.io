import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the hero headline and primary call to action', () => {
    render(<HomePage />);
    expect(screen.getByText(/Discover premium entertainment with style/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore library/i)).toBeInTheDocument();
  });
});
