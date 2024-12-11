import { getContactBlock } from "@/services/api/contact";
import { PageComponent } from "@/src/components/NotionBlockComponent/PageProjectBlock";

export default async function Contact(){
  const contactInfo =  await getContactBlock();
  return(
    <main>
      <section>
        <h1>Contact</h1>
        <PageComponent page={contactInfo}/>
        <div className="flex flex-wrap gap-8">
          <InfoContactComponent text="Test"/>
          <InfoContactComponent text="Test"/>
          <InfoContactComponent text="Test"/>
        </div>
      </section>
    </main>
  )
}

function InfoContactComponent({text} : any){
  return(
    <div className="w-36 h-36 bg-grey rounded-lg flex flex-col items-center justify-center shadow-inner border border-darkBlue">
      <div></div>
      <p>{text}</p>
    </div>
  )
}