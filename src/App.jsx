import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Register from './pages/Register';

import { logOut } from './redux/auth/authActions';


function App() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();




    return (
        <div>
            <Header />
            {auth.currentUser ? (
        <>
          <div>Connected user with token {auth.currentUser.token}</div>
          <button onClick={() => dispatch(logOut())}>Log out</button>
          {/* <Route path="/" element={<Contacts/>} /> */}
        </>
      ) : (
        <>
        <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
          {auth.error ? <span>{auth.error?.response.data}</span> : null}
        </>
      )}
            
        </div>



    )
}

export default App