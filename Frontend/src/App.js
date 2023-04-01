import React from "react";
import { Route, Routes } from "react-router-dom";

/**
 * Import Layouts
 */
import DashboardLayout from "./layouts/DashboardLayout";

import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import DoctorList from "./pages/DoctorList";
import AuthorizeDoctor from "./pages/AuthorizeDoctor";
import NotFound from "./pages/NotFound";
import Patients from "./pages/Patients";
import Signup from "./pages/Signup";
import Insure from "./pages/Insure";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authorize-doctor" element={<AuthorizeDoctor />} />
          <Route path="/de-authorize-doctor" element={<AuthorizeDoctor />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/insure" element={<Insure />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patients" element={<Patients />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
