import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('renders Community component', () => {

  beforeEach(() => {
    render(<Router><Home/></Router>);
    
  });

  it('Navigate to Community Page', async () => {

    userEvent.click(screen.getAllByRole('button', { name: 'Community' })[0]);
   
        //userEvent.click(screen.getAllByRole('button', { name: 'Community' })[0]);
        // const publishButton = screen.getByRole('button', { name: 'Publish' });
        // expect(publishButton).toBeInTheDocument();

        const labelText1 = screen.getByRole('input', { name: 'title' });
        //const labelText1=screen.getByTitle("Have something interesting to share with the community? ");
        expect(labelText1).toBeInTheDocument();
        console.log("Hey John");

     
    
    

  });

//   it('Check Text', async () => {
//     const labelText1=screen.getByLabelText("Have something interesting to share with the community? ");

//     waitFor(() => {
//         userEvent.click(screen.getAllByRole('button', { name: 'Community' })[0]);
//         const labelText1 = screen.getByRole('input', { name: 'title' });
//         //const labelText1=screen.getByTitle("Have something interesting to share with the community? ");
//         expect(labelText1).toBeInTheDocument();
//       });
    
    

  //});





});


