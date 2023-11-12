import Login from './Login';
import {render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe("text fields", () => {

    test("text fields should be rendered", () => {
        render(<Router><Login/></Router>);
        const usernameLabel = screen.getByText('Username');
        const passwordLabel = screen.getByText('Password');
        const usernameTextField = usernameLabel.parentElement.querySelector('input');
        const passwordTextField = passwordLabel.parentElement.querySelector('input');
        expect(usernameTextField).toBeInTheDocument();
        expect(passwordTextField).toBeInTheDocument();
    });

    test("initially text fields should be empty", () => {
        render(<Router><Login/></Router>);
        const usernameLabel = screen.getByText('Username');
        const passwordLabel = screen.getByText('Password');
        const usernameTextField = usernameLabel.parentElement.querySelector('input');
        const passwordTextField = passwordLabel.parentElement.querySelector('input');
        expect(usernameTextField.value).toMatch("");
        expect(passwordTextField.value).toMatch("");
    });

    test("text fields should accept text", () => {
        render(<Router><Login/></Router>);
        const usernameLabel = screen.getByText('Username');
        const passwordLabel = screen.getByText('Password');
        const usernameTextField = usernameLabel.parentElement.querySelector('input');
        const passwordTextField = passwordLabel.parentElement.querySelector('input');
        fireEvent.change(usernameTextField, {target: {value: "jasminewang"}});
        expect(usernameTextField.value).toMatch("jasminewang");
        fireEvent.change(passwordTextField, {target: {value: "abc123"}});
        expect(passwordTextField.value).toMatch("abc123");
    });
});