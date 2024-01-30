import { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './app/Pages/Home/Home';
import Header from './app/Components/Header/Header';
import Projects from './app/Pages/Projects/Projects';
import Aboutme from './app/Pages/AboutMe/Aboutme';

function App() {

  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Ha-banna/repos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <>
          <Header></Header>
          
            <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/projects' element={<Projects data={data}></Projects>}/>
              <Route path='/aboutme' element={<Aboutme></Aboutme>}/>
            </Routes>
          
        </>
      </Router>
    </>
  )
}

export default App;
