import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './app/Pages/Home/Home';
import Header from './app/Components/Header/Header';

function App() {

  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
