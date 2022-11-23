import Conversation from "../src/components/conversations/Conversation";
import { render, screen } from '@testing-library/react';
import App from './App';


// inport the message
let message = 

describe('App component', () => {
 test('it renders', () => {
   render(<App />);


   expect(screen.getByText('Users:')).toBeInTheDocument();
 });
})