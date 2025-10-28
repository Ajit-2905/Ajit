import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactModal from "./ContactModal";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Home from "./Home";

import Payal from "./Pages/Payal";
import Chain from "./Pages/Chain";
import Ferva from "./Pages/Ferva";
import Bracelet from "./Pages/Bracelet";
import Vala from "./Pages/Vala";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactModal" element={<ContactModal />} />

         {/* Product Pages */}
         <Route path="/Pages/Payal" caseSensitive={false} element={<Payal />} />
         <Route path="/Pages/Chain" caseSensitive={false} element={<Chain />} />
         <Route path="/Pages/Ferva" caseSensitive={false} element={<Ferva />} />
         <Route path="/Pages/Bracelet" caseSensitive={false} element={<Bracelet />} />
         <Route path="/Pages/Vala" caseSensitive={false} element={<Vala />} />

      </Routes>
    </Router>
  );
}

export default App;
console.log({ Navbar, Home, AboutUs, ContactModal, Payal });