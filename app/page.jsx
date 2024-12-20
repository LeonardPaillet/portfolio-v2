import { getXP } from "@/services/api/experience";
import { getProjects } from "@/services/api/project";
import Experience from "@/src/components/Experience";
import Project from "@/src/components/Project";




export default async function Home() {
  const projects = await getProjects()
  const experiences = await getXP()
  //console.log(experiences)
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
