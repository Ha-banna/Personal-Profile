import Cards from '../../Components/Cards/Cards';
import './Projects.css'
import logo from '../../images/HA.png'

export default function Projects(){
    return(
        <>
            <h1>My Projects</h1>
            <div className='card-cont'>
                <Cards img={logo}></Cards>
            </div>
        </>
    );
}