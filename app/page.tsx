import { getContactBlock } from "@/services/api/contact";
import { getXP } from "@/services/api/experience";
import { getPresentationBlock } from "@/services/api/presentation";
import { getProjects } from "@/services/api/project";
import Project from "@/src/components/Project";
import { TestComponent } from "@/src/components/TestComponent";




export default async function Home() {
  const projects = await getProjects()
  const experiences = await getXP()
  const contact = await getContactBlock()
  const presentation = await getPresentationBlock()
  console.log(presentation)
  return (
    <div>
      <h1>Yo</h1>
      {projects.results.map((project, index)=>(
        <div key={index}>
          <Project project={project} />
          
        </div>
        
      ))}
      <TestComponent component={presentation}/>
    </div>
  );
}
