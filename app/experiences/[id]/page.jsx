import { getPage, getPageBlock } from "@/services/api/page";
import { removeHyphens } from "@/services/utils";
import { PageComponent } from "@/src/components/NotionBlockComponent/PageProjectBlock";

export default async function ExperiencePage({params}){
  const id = removeHyphens(params.id);
  const experienceBlock = await getPageBlock({pageId : id})
  const experience = await getPage({pageId : id})
  const title = experience.properties.Titre.title[0].plain_text
  return(
    <main>
      <section>
        <h1>{title}</h1>
        <PageComponent page={experienceBlock}/>
      </section>
    </main>
  )
}