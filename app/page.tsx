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
    <main>
      <section>
        <h1>DÉCOUVRE MON UNIVERS</h1>
      </section>
      
      <section>
        <h2>MES PROJETS</h2>
        <div className="flex flex-wrap gap-4 justify-center 2xl:px-44">
          {projects.results.map((project, index)=>(
            <Project key={index} project={project} />  
                          
          ))}
        </div>
      </section>
      <section>
        <h2>MON PARCOURS</h2>
        <Experience dataXP={experiences}/>
      </section>
      
    </main>
  );
}
