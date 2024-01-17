import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './app/Pages/Home/Home';
import Header from './app/Components/Header/Header';

function App() {

  return (
    <>
      <Router>
        <>
          <Header></Header>
          
            <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/projects' element={<></>}/>
              <Route path='/aboutme' element={<></>}/>
            </Routes>
          
        </>
      </Router>
    </>
  )
}

export default App;
