import PFP from '../../Components/ProfilePic/PFP';
import './Home.css'

export default function Home(){
    return(
        <>
            <div className='home-cont'>
                <PFP></PFP>
                <div>
                    <h1>Hi, I am <span>Hamza Albanna</span></h1>
                </div>
            </div>
        </>
    );
}