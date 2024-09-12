import { getXP } from "@/services/api/experience";
import { getProjects } from "@/services/api/project";
import Project from "@/src/components/Project";




export default async function Home() {
  const projects = await getProjects()
  const experiences = await getXP()
  console.log(experiences.results)
  return (
    <div>
      <h1>Yo</h1>
      {projects.results.map((project, index)=>(
        <div key={index}>
          <Project project={project} />
          
        </div>
        
      ))}
    </div>
  );
}
