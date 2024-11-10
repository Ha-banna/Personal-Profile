import './Aboutme.css'
import LongText from '../../Components/LongText/LongText';
import Skills from '../../Components/Skills/Skills';

export default function Aboutme() {
    return (
        <>
            <LongText>
                Hello! I'm Hamza Albanna, a Computer Science student with a strong foundation in software development and web technologies. I have experience as a freelance web developer, creating intuitive user interfaces and dynamic web applications using technologies like React.js, Node.js, and Tailwind CSS.
                <br />
                <br />
                My technical skills span programming languages such as Python, Java, C, MySQL, and PostgreSQL. I am also proficient in tools like Numpy, Pandas, and frameworks such as FastAPI. My expertise extends to OOP design, data structures, and machine learning. Some of my notable projects include a Phone Price Predictor and a real-time Quick Chat application leveraging Google OAuth2 authentication.
                <br />
                <br />
                I am eager to bring my skills and enthusiasm to new challenges and opportunities, always driven by a passion for continuous learning and problem-solving.
                <br />
                <br />
                Connect with me on <a target='_blank' href='https://www.linkedin.com/in/hamza-a-albanna-3a4737200'>LinkedIn</a> or explore my work on <a target='_blank' href='https://github.com/Ha-banna'>GitHub</a>.
            </LongText>

            <Skills/>
        </>
    );
}
