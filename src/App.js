import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Contacts />} />
          </Routes>
    </>
  );
}

export default App;