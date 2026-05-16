import ProjectCard from "../components/projectcard";
import {projects} from "../data/projects"


function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            github={project.github}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects