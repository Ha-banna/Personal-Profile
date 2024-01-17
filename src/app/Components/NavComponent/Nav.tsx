import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav(props: {to: string, totxt: string}){
    return(
        <>
            <Link to={props.to}>
                <div className='nav-div'>
                    <p className='nav-txt'>
                        {props.totxt}
                    </p>
                </div>
            </Link>
        </>
    );
}