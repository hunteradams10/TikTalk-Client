import "./style.scss"
import Register from "./components/Register";
import Login from "./components/Login";

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
        <Route path="tiktalk/register" element={<Register />} />
        <Route path="tiktalk/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
