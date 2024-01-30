import Nav from '../NavComponent/Nav';
import './Header.css';
import logo from '../../images/HA.png'
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <>
            <header>
                <Link to='/'><img src={logo} className='logo-img' alt='logo'></img></Link>
                <div className='nav-cont'>
                    <Nav to='/' totxt='Home'></Nav>
                    <Nav to='/projects' totxt='Projects'></Nav>
                    <Nav to='/aboutme' totxt='About Me'></Nav>
                </div>
                <div></div>
            </header>
            <div className="hr"></div>
        </>
    );
}