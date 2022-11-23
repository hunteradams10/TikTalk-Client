// imports for this page
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';import { AuthContextProvider } from './utils/authContext';
import { initializeApp } from "firebase/app";

// firebase info

const firebaseConfig = {
  apiKey: "AIzaSyBjMUyEPGM5_BnSm9TMAVZvHZKROllxFyQ",
  authDomain: "tik-talk-dc018.firebaseapp.com",
  projectId: "tik-talk-dc018",
  storageBucket: "tik-talk-dc018.appspot.com",
  messagingSenderId: "302011714291",
  appId: "1:302011714291:web:65095be46ca5c18f3c0586",
  measurementId: "G-5FRN4GQPXF"
};
// initializes the app with the above configuration.
initializeApp(firebaseConfig);

// entire application is wrapped in context provider.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);