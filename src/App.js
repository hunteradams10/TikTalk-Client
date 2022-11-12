import "./style.scss"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./components/Chat";
import reducer from "./utils/StateReducer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { StateContext } from "./utils/StateContext";
import { useReducer } from "react";

function App() {

  const initialState = {
    loggedInUser: null,
    auth: null
  };

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store;

  return (
    <div>
      <StateContext.Provider value = {{store, dispatch}}>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
}

export default App;
