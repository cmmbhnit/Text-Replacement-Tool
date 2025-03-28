import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FillTheBlank from './pages/FillTheBlank'
// import About from './pages/About';
// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/Text-Replacement-Tool/" element={<Home />} />
      <Route path="/fill-the-blank" element={<FillTheBlank />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
