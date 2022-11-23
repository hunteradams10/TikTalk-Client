import { render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { createMemoryHistory } from 'history';
import ChatMainPage from './pages/chatMainPage/ChatMainPage';

// test Login page
test('renders the landing page', () => {
    render(<App />);
    expect(screen.getByPlaceholderText("email...")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("password...")).toBeInTheDocument()
  });

// test chat main page
test("test", () =>{
    createMemoryHistory({ initialEntries: ['/chat'] }); // be able to control view history
    render(<App />)
    expect(screen.findByText("Send")).toBeInTheDocument()
})


 