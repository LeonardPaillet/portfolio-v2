import { getPageBlock } from "@/services/api/page"
import { removeHyphens } from "@/services/utils"
import { ProjectPageComponent } from "./ProjectPageComponent";

export default async function ProjectPage({
  params,
} : {
  params: { id: string };
}){
  const id = removeHyphens(params.id);
  console.log(id)
  const project = await getPageBlock({pageId : id})
  console.log(project)
  
  return(
    <main>
      <section>
        <h1>MON PROJET</h1>
        <ProjectPageComponent project={project}/>
      </section>
    </main>
  )
}