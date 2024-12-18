import { getPage, getPageBlock } from "@/services/api/page"
import { removeHyphens } from "@/services/utils"
import { PageComponent } from "@/src/components/NotionBlockComponent/PageProjectBlock";


export default async function ProjectPage({
  params,
} : {
  params: { id: string };
}){
  const id = removeHyphens(params.id);
  const projectBlock = await getPageBlock({pageId : id})
  const project = await getPage({pageId : id})
  const title = project.properties.Nom.title[0].plain_text
  const logo = project.properties['Image pres'].files[0].file.url
  const listTechno = project.properties.Technologies.multi_select
  const url = project.properties.URL.url
  return(
    <main>
      <section>
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <img src={logo} alt={"logo " +title} width={"150px"}/>
          <h1>{title}</h1>
        </div>
        <div className="flex gap-4">
          {listTechno.map((tag : any, index : number)=>(
            <TagComponent key={index} tag={tag} />                
          ))}
        </div>
        {
          url ? (
            <div>
              Lien du projet :
              <a target="_blank" href={url} className="text-lightBlue hover:text-grey"> {url}</a>
            </div>
          ) : 
          null
        }
        
        <PageComponent page={projectBlock}/>
      </section>
    </main>
  )
}

function TagComponent({tag} : any){
  return(
    <div className=" rounded-xl border py-2 px-4 border-blue-300">{tag.name}</div>
  )
}

const webTechnologiesColors = {
  javascript: "border-yellow-400",  // jaune
  typescript: "text-blue-400",    // bleu clair
  html: "text-orange-500",        // orange
  css: "text-blue-500",           // bleu
  react: "text-cyan-400",         // cyan
  vue: "text-green-400",          // vert
  angular: "text-red-500",        // rouge
  node: "text-green-600",         // vert foncé
  python: "text-blue-800",        // bleu marine
  php: "text-purple-400",         // violet
  ruby: "text-red-700",           // rouge foncé
  java: "text-red-600",           // rouge brique
  go: "text-teal-400",            // turquoise
  swift: "text-orange-600",       // orange vif
  kotlin: "text-purple-600",      // violet foncé
  sql: "text-blue-300",           // bleu ciel
};