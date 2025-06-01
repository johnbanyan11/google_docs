import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/Auth/LoginPage.jsx";
import RegistrationPage from "./components/Auth/RegistrationPage.jsx";
import Docs from "./components/Docs/Docs.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/doce" element={<Docs />} />
            </Routes>
        </Router>
    );
};

export default App;