import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('renders home component', () => {

  beforeEach(() => {
    render(<Router><Home/></Router>);
  });

  it('Feed check', async () => {

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



  it('Carousel Images', () => {
  // Validating the Carousel Actions
  const nextButton = screen.getByText('Next');
  const prevButton = screen.getByText('Previous');

  const images = screen.getAllByRole('img');
  const expectedValues=["1.jpeg","2.png","3.jpeg","5.jpeg","4.jpg"];

  const actualSrcValues = images.map((image) => image.getAttribute('src'));

  for (let i = 0; i < expectedValues.length; i++) {
    expect(actualSrcValues[i]==expectedValues[i]);
  }

});


it('Button Check', async () => {

  const feedButton = screen.getAllByRole('button', { name: /Feed/i });
  // Ensure there are exactly 1 "Feed" button
  expect(feedButton.length).toBe(1);


  const profileButton = screen.getAllByRole('button', { name: /Profile/i });
  // Ensure there are exactly 1 "Profile" button
  expect(profileButton.length).toBe(1);


  const communityButton = screen.getAllByRole('button', { name: /Community/i });
  // Ensure there are exactly 1 "Profile" button
  expect(communityButton.length).toBe(1);



});


it('navigates to the community page when the Community button is clicked', () => {
  const { getByText, history } = render(
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>
  );

 // Check that we are initially on the home page
 expect(window.location.pathname).toBe('/');

 // Click the "Community" button
 fireEvent.click(screen.getAllByRole('button', { name: /Community/i })[0]);

 // Check that we are now on the community page
 expect(window.location.pathname).toBe('/community');
});




});


