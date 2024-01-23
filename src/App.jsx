import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import Dashboard from './components/header/Dashboard';
import Login from './components/header/Login';
import Signup from './components/header/Signup';
import Home from './components/header/Home';
import Viewbag from './components/header/Viewbag';

function App() {
  return (
    <>
    <Router>
      <header>
        <div className='bg-pink-400 flex-row '>
      <nav className='bg-yellow-300 flex flex-row p-4'>
        <ul className='flex items-center gap-5 ml-[54rem]'>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard"></Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          
          <li>
            <Link to="/viewbag">users</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/viewbag" element={<Viewbag/>} />
        </Routes>
      </header>
    </Router>
    </>
  );
}

export default App;