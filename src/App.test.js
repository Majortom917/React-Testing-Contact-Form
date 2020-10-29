import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

describe('no errors for validation for an input that is more than 3 long', () => {
  
  test('fills out form and submits without error', () => {

    const utils = render(<App />);
    const firstNameInput = screen.getByPlaceholderText('Edd');
    const lastNameInput = screen.getByPlaceholderText(/Burke/i);
    const email = screen.getByPlaceholderText(/placeholder@placeholder.com/i);


    fireEvent.change(firstNameInput, { target: {value: 'Throckmorton'}});
    fireEvent.change(lastNameInput, { target: {value: 'skater'}});
    fireEvent.change(email, { target: {value: 'sk8tercousin@hawtmail.com'}});


    expect(firstNameInput.value).toBe('Throckmorton');
    expect(lastNameInput.value).toBe('skater');
    expect(email.value).toBe('sk8tercousin@hawtmail.com');

    const button = screen.getByRole("button", {name: /submit/i});
    fireEvent.click(button);

  })
})