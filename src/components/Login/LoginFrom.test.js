import { render,screen } from "@testing-library/react"
import LoginFrom from "./LoginFrom"

test('renders email as a text',()=>{
//arrange
    render(<LoginFrom />);

    //act 
    //....nothing 


    //assert

   const signupElement = screen.getByText('email');

   expect(signupElement).toBeInTheDocument()

})