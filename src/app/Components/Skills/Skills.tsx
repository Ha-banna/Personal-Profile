import './Skills.css';

export default function Skills() {
    const skills = [
        { name: 'Python', proficiency: 90 },
        { name: 'Java', proficiency: 85 },
        { name: 'JavaScript', proficiency: 80 },
        { name: 'React.js', proficiency: 75 },
        { name: 'MySQL', proficiency: 70 },
        { name: 'FastAPI', proficiency: 65 },
    ];

    return (
        <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map(skill => (
                    <div key={skill.name} className="skill">
                        <span className="skill-name">{skill.name}</span>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.proficiency}%` }}
                            >
                                {skill.proficiency}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
