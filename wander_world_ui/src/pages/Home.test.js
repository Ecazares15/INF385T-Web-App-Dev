import { render, screen } from '@testing-library/react';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('renders home component', () => {

  beforeEach(() => {
    render(<Router><Home/></Router>);
  });

  it('should pass', async () => {

    const feedButton = screen.getByText(/Feed/i);
    expect(feedButton).toBeInTheDocument();

  });

});


