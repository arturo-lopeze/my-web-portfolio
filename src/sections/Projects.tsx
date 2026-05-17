import ExpertiseCard from "../components/ExpertiseCards";

function Projects(){
  return(
    <section className="skill-section">
      <ExpertiseCard
      title="Backend Development"
      technologies={["Python, TypeScript, Go"]}
      />

      <ExpertiseCard
      title="IoT"
      technologies={["Rust, C"]}
      />
    </section>
  );
}

export default Projects;