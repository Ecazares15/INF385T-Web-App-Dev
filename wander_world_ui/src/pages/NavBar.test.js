import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('renders home component', () => {

  beforeEach(() => {
    render(<Router><Home/></Router>);
  });

  test('logo and navigation links', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
  
    // Check logo 
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  
    // Check links are present
    expect(screen.getByText('WanderWorld')).toBeInTheDocument();
    expect(screen.getByText('Feed')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
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


