import { BrowserRouter, Routes, Route } from "react-router-dom";
("use client");

import routeURLs from "./routes";

//     Home,
//     About,
//     Services,
//     Products,
//     Gallery,
//     Contact,
//     Careers,

// Hair,
// Nail,
// Waxing,
// Massage,
// Facial,
// Events,

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<routeURLs.Home />} />
          <Route path="/about" element={<routeURLs.About />} />
          <Route path="/services" element={<routeURLs.Services />} />
          <Route path="/products" element={<routeURLs.Products />} />
          <Route path="/gallery" element={<routeURLs.Gallery />} />
          <Route path="/contact" element={<routeURLs.Contact />} />
          <Route path="/careers" element={<routeURLs.Careers />} />

          <Route path="/services/hair" element={<routeURLs.Hair />} />
          <Route path="/services/nails" element={<routeURLs.Nail />} />
          <Route path="/services/facial" element={<routeURLs.Facial />} />
          <Route path="/services/massage" element={<routeURLs.Massage />} />
          <Route path="/services/waxing" element={<routeURLs.Waxing />} />
          <Route path="/services/events" element={<routeURLs.Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
