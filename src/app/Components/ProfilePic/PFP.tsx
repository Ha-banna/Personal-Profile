import './PFP.css'
import profile_pic from '../../images/profile-picture.jpeg'

export default function PFP(){
    return (
        <div className='pfp-cont'>
            <img src={profile_pic} alt="profile" className="profile-pic" />
        </div>
    );
}