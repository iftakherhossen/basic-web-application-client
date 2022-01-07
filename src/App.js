import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import React from 'react';
import Registration from "./Component/Registration";
import AuthProvider from "./context/AuthProvider";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage/LoginPage/LoginPage";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/LoginPage/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/newUserRegistration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;