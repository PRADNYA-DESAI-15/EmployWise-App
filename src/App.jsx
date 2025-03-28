import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/edit/:id" element={<EditUser  />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
