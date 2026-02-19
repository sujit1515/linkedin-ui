import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarSimple from "./components/Navbar";

import Signup from "./components/SignUp";
import Login from "./components/Login";
import ForgotPasswordPage from "./components/Forgot-password";
import ResetPasswordPage from "./components/Reset-password";
import Main from './pages/professionalfeed/Main'
import Hero from "./pages/Home/Hero";
import Profile from './pages/Profile/Main'

function App() {
  return (
    <BrowserRouter>
      <NavbarSimple />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
