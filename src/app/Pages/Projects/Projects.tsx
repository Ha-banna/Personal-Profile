import Cards from '../../Components/Cards/Cards';
import './Projects.css'
//import logo from '../../images/HA.png'

//https://api.github.com/users/<USER-NAME>/repos 

function Projects(props: {data:Array<Object>}){
    return(
        <>
            <h1>My Projects</h1>
            <div className='card-cont'>
                {props.data ? 
                props.data.map((repo: any) => (
                <Cards key={repo.id} project_name={repo.name} link={`https://github.com/${repo.full_name}`}></Cards>
                ))
                : <h1 className='loading'>loading...</h1>}

            </div>
        </>
    );
}

export default Projects;