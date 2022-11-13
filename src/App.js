import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Messenger from "./pages/messenger/Messenger";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/messenger" element={<Messenger />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
