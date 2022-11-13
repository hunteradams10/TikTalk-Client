import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./components/Chat";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
