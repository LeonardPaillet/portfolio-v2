import { getContactBlock } from "@/services/api/contact";
import { getContextBlock } from "@/services/api/context";
import { getXP } from "@/services/api/experience";
import { getInformationBlock } from "@/services/api/information";
import { getPresentationBlock } from "@/services/api/presentation";
import { getProjects } from "@/services/api/project";
import Experience from "@/src/components/Experience";
import Project from "@/src/components/Project";
import { TestComponent } from "@/src/components/TestComponent";




export default async function Home() {
  const projects = await getProjects()
  const experiences = await getXP()
  const contact = await getContactBlock()
  const presentation = await getPresentationBlock()
  const information = await getInformationBlock()
  const context = await getContextBlock()
  return (
    <div>
      <h1 className="bg-slate-100">Yo</h1>
      {projects.results.map((project, index)=>(
        <div key={index}>
          <Project project={project} />
          
        </div>
        
      ))}
      <Experience dataXP={experiences}/>
    </div>
  );
}
