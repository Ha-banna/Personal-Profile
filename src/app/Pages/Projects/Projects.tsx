import Cards from '../../Components/Cards/Cards';
import './Projects.css'
import resume from '../../files/resume.pdf'

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
            <h1>My Resume</h1>
            <div className='resume-cont'>
                <embed src={resume} height='1000px' type="application/pdf"/>
            </div>
        </>
    );
}

export default Projects;