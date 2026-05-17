type ExpertiseCardprops = {
    title : string;
    technologies : string [];
};

export default function ExpertiseCard({
    title,
    technologies,
} : ExpertiseCardprops){
    return (
        <div className="skill-card">
            <h3>{title}</h3>

            <div className="tech-list">
                {technologies.map((tech) => (
                    <span key={tech} className="tech-item">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}