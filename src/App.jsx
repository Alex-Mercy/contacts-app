import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Contacts from './pages/Contacts'
import Login from './pages/Login'


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Contacts/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>

    )
}

export default App