import logo from './logo.svg';
import './App.css';
import Signup from './signup';
import {  Navigate, Route, Router, Routes, Switch } from "react-router-dom"
import Login from './login';
import Profile from './profile';
import { useSelector } from 'react-redux';

function App(props) {

  const login = useSelector(state => {return state.login})

  return (
    <div className="App">


   <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        {login && login.login && <Route path="/profile" element={ <Profile/> } />}
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>


    </div>
  );
} 

export default App;
