import Nav from '../NavComponent/Nav';
import './Header.css';

export default function Header (){
    return(
        <>
            <header>
                <Nav to='/' totxt='Home'></Nav>
                <Nav to='/projects' totxt='Projects'></Nav>
                <Nav to='/aboutme' totxt='About Me'></Nav>
                
            </header>
            <div className="hr"></div>
        </>
    );
}