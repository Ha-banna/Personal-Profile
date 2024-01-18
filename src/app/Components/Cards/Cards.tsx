import './Cards.css'
//<img src={props.img} alt='project' className='card-image'/>
export default function Cards(props: {project_name: string, link: string}){
    return(
        <a href={props.link}>
            <div className='card'>
                <div className="card-inner-cont">
                    
                    <h3 className='project-name'>{props.project_name}</h3>
                </div>
            </div>
        </a>
    );
}