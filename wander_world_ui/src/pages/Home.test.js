import { render, screen } from '@testing-library/react';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('renders home component', () => {

  beforeEach(() => {
    render(<Router><Home/></Router>);
  });

  it('check buttons', async () => {

    const feedButton = screen.getByText(/Feed/i);
    expect(feedButton).toBeInTheDocument();

    const communityButton = screen.getByText(/Community/i);
    expect(communityButton).toBeInTheDocument();

    const profileButton = screen.getByText(/Profile/i);
    expect(profileButton).toBeInTheDocument();

  });

  it('check text', async () => {

    const feedText = screen.getByText(/Join a world of shared experiences/i);
    expect(feedText).toBeInTheDocument();

    const communityText = screen.getByText(/Embrace the world's wonders together/i);
    expect(communityText).toBeInTheDocument();

    const profileText = screen.getByText(/Navigate the world and share your story/i);
    expect(profileText).toBeInTheDocument();

  });

  it('check title', async () => {

    const titleText = screen.getByText(/Your Journey Begins with WanderWorld!/i);
    expect(titleText).toBeInTheDocument();

  });

});


