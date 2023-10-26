import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
    test("Should load contact component", () => {
        render(<Contact />);
        
        // Quering
        const heading = screen.getByRole("heading");
    
        //Assertion 
        expect(heading).toBeInTheDocument();
    });
    
    //instead of "test" can write "it" also
    it("Should load button inside my contact component", () => {
        render(<Contact />);
    
        // const button = screen.getByRole("button");
        //   OR
        const button = screen.getByText("Submit")
        
        //Assertion 
        expect(button).toBeInTheDocument();
    });
    
    test("should load input inside my contact component",() =>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Full name");
    
        expect(inputName).toBeInTheDocument();
    })
    
    test("should load all input boxes inside my contact component", () => {
        render(<Contact/>);
    
        //Quering.
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes.length);//it creates virtual DOM ==> JSX which is a React element => js object
    
        //Assertion
        expect(inputBoxes.length).toBe(3);
    
    })
});
