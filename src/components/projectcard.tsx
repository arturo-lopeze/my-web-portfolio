import { SiReact, SiTypescript, SiNodedotjs } from "react-icons/si"

const icons = {
  React: SiReact,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs
}

type ProjectCardProps = {
    title:string
    description: string
    stack: string []
    github: string
}

function ProjectCard({
  title,
  description,
  stack,
  github
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="stack">
        {stack.map((tech) => {
          const Icon = icons[tech as keyof typeof icons]
          return Icon ? <Icon key={tech} /> : <span key={tech}>{tech}</span>
        })}
      </div>

      <a href={github} target="_blank">
        GitHub
      </a>
    </article>
  )
}

export default ProjectCard