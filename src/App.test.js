import { render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import ChatMainPage from './pages/chatMainPage/ChatMainPage';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Register from './pages/Register';

// test sign in page
test('renders the sign in page', () => {
    render(<App />);
    expect(screen.getByPlaceholderText("email...")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("password...")).toBeInTheDocument()
  });

  test('renders the register page', async () => {
    render (
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )
    expect(screen.getByPlaceholderText("email...")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("password...")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("username...")).toBeInTheDocument()
  });

// test chat main page
test("chat screen should show message box and send button", async () =>{
    // set up firebase config for the test
    const firebaseConfig = {
        apiKey: "AIzaSyBjMUyEPGM5_BnSm9TMAVZvHZKROllxFyQ",
        authDomain: "tik-talk-dc018.firebaseapp.com",
        projectId: "tik-talk-dc018",
        storageBucket: "tik-talk-dc018.appspot.com",
        messagingSenderId: "302011714291",
        appId: "1:302011714291:web:65095be46ca5c18f3c0586",
        measurementId: "G-5FRN4GQPXF"
      };
      // initialise firebase
      initializeApp(firebaseConfig);
    render(
        <BrowserRouter>
            <ChatMainPage />
        </BrowserRouter>
    )
    expect(await screen.findByText("Send")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("say something!")).toBeInTheDocument()
})

test("chat screen should show create group button and group name textbox", async () =>{
    // set up firebase config for the test
    const firebaseConfig = {
        apiKey: "AIzaSyBjMUyEPGM5_BnSm9TMAVZvHZKROllxFyQ",
        authDomain: "tik-talk-dc018.firebaseapp.com",
        projectId: "tik-talk-dc018",
        storageBucket: "tik-talk-dc018.appspot.com",
        messagingSenderId: "302011714291",
        appId: "1:302011714291:web:65095be46ca5c18f3c0586",
        measurementId: "G-5FRN4GQPXF"
      };
      // initialise firebase
      initializeApp(firebaseConfig);
    render(
        <BrowserRouter>
            <ChatMainPage />
        </BrowserRouter>
    )
    expect(await screen.findByText("Create group")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("New Group Name...")).toBeInTheDocument()
})

test("chat screen should show login and sign up links", async () =>{
    // set up firebase config for the test
    const firebaseConfig = {
        apiKey: "AIzaSyBjMUyEPGM5_BnSm9TMAVZvHZKROllxFyQ",
        authDomain: "tik-talk-dc018.firebaseapp.com",
        projectId: "tik-talk-dc018",
        storageBucket: "tik-talk-dc018.appspot.com",
        messagingSenderId: "302011714291",
        appId: "1:302011714291:web:65095be46ca5c18f3c0586",
        measurementId: "G-5FRN4GQPXF"
      };
      // initialise firebase
      initializeApp(firebaseConfig);
    render(
        <BrowserRouter>
            <ChatMainPage />
        </BrowserRouter>
    )
    expect(await screen.findByText("Login")).toBeInTheDocument()
    expect(await screen.findByText("Sign Up")).toBeInTheDocument()
})

test("chat screen should show login and sign up links", async () =>{
    // set up firebase config for the test
    const firebaseConfig = {
        apiKey: "AIzaSyBjMUyEPGM5_BnSm9TMAVZvHZKROllxFyQ",
        authDomain: "tik-talk-dc018.firebaseapp.com",
        projectId: "tik-talk-dc018",
        storageBucket: "tik-talk-dc018.appspot.com",
        messagingSenderId: "302011714291",
        appId: "1:302011714291:web:65095be46ca5c18f3c0586",
        measurementId: "G-5FRN4GQPXF"
      };
      // initialise firebase
      initializeApp(firebaseConfig);
    render(
        <BrowserRouter>
            <ChatMainPage />
        </BrowserRouter>
    )
    expect(await screen.findByText("Add")).toBeInTheDocument()
    expect(await screen.findByText("Leave Group")).toBeInTheDocument()
    expect(await screen.findByPlaceholderText("Invite by email...")).toBeInTheDocument()
})