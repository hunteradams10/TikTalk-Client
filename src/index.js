import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';import { AuthContextProvider } from './utils/authContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjMUyEPGM5_BnSm9TMAVZvHZKROllxFyQ",
  authDomain: "tik-talk-dc018.firebaseapp.com",
  projectId: "tik-talk-dc018",
  storageBucket: "tik-talk-dc018.appspot.com",
  messagingSenderId: "302011714291",
  appId: "1:302011714291:web:65095be46ca5c18f3c0586",
  measurementId: "G-5FRN4GQPXF"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);