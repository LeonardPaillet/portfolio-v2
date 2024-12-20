import { getProjects } from "@/services/api/project"
import Project from "@/src/components/Project"

export default async function Projects(){
  const projects = await getProjects()
  return(
    <main>
      <section>
        <h1>MES PROJETS</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.results.map((project, index)=>(
            <Project key={index} project={project} />                
          ))}
        </div>
      </section>
    </main>
  )
}