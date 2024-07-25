import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AstrologerDetail from './components/AstrologerDetail';
import CreateAstrologer from './components/CreateAstrologer';
import UpdateAstrologer from './components/UpdateAstrologer';

const App = () => {
  return (
    <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/astrologer/:id" element={<AstrologerDetail />} />
      <Route path="/create" element={<CreateAstrologer />} />
      <Route path="/update/:id" element={<UpdateAstrologer />} />
    </Routes>
  );
};

export default App;
