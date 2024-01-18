import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './app/Pages/Home/Home';
import Header from './app/Components/Header/Header';
import Projects from './app/Pages/Projects/Projects';

function App() {

  return (
    <>
      <Router>
        <>
          <Header></Header>
          
            <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/projects' element={<Projects></Projects>}/>
              <Route path='/aboutme' element={<></>}/>
            </Routes>
          
        </>
      </Router>
    </>
  )
}

export default App;
