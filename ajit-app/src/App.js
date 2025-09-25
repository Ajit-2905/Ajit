import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ContactModal from "./ContactModal";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() { return <h2>Home Page</h2>; }

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactModal />} />
        </Routes>
      </div>
    </Router>
  );
}
