import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('renders home component', () => {

  beforeEach(() => {
    
    render(<NavBar />);
  });

  test('renders Login component with initial title', () => {

    console.log("THROUGH-------------------------------------")
   
  });
  
  test('renders login and register forms', () => {
    render(<LoginPage />);
  
    // Check if login and register forms are rendered
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Don\'t have an account? Create one now! ')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
  });
  
  test(' login', () => {
   // render(<LoginPage />);
  
    
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    
  
  });

  test(' registration', () => {
    //render(<LoginPage />);
  
    
    fireEvent.click(screen.getByRole('button', { name: 'Register' }));
    
  });




});


