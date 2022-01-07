import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="Register" element={<Register />}/>
        <Route path="Profile" element={<Profile />}/>
        <Route path="*" element={<ErrorPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
