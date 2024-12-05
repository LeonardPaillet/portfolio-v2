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
    <div className="px-72 flex flex-col gap-12">
      <section className="flex flex-col text-center items-center gap-4">
        <h1 className="font-bold text-5xl">DÉCOUVRE MON UNIVERS</h1>
      </section>
      
      <section className="flex flex-col text-center items-center gap-4">
        <h2 className="font-bold text-4xl">MES PROJETS</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.results.map((project, index)=>(
            <Project key={index} project={project} />                
          ))}
        </div>
      </section>
      <section className="flex flex-col text-center items-center gap-4">
        <h2 className="font-bold text-4xl">MON PARCOURS</h2>
        <Experience dataXP={experiences}/>
      </section>
      
    </div>
  );
}
