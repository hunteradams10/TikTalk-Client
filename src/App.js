import "./style.scss"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SideBar from "./components/SideBar";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
