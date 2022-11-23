// imports for this page
import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ChatMainPage from "./pages/chatMainPage/ChatMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  //browser router is used to handle navigation routes.
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<ChatMainPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
