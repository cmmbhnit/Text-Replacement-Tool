import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FillTheGaps from './pages/FillTheGaps'
import FreeText from './pages/FreeText'
import MatchThePairs from './pages/MatchThePairs'
import TrueOrFalse from './pages/TrueOrFalse'
import MultipleChoice from './pages/MultipleChoice'


const App = () => {
  return (
    <Routes>
      <Route path="/Text-Replacement-Tool/" element={<Home />} />
      <Route path="//fill-the-gaps" element={<FillTheGaps />} />
      <Route path="//free-text" element={<FreeText />} />
      <Route path="//multiple-choice" element={<MultipleChoice />} />\
      <Route path="//true-or-false" element={<TrueOrFalse />} />
      <Route path="//match-the-pairs" element={<MatchThePairs />} />
    </Routes>
  );
};

export default App;
