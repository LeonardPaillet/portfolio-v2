import { XPBlock } from "./XPBlock"

export async function XP({data}){
  //const descriptionPage = await getPageBlock({pageId : data.id})
  //<XPDescribe data={descriptionPage}/>
  //console.log(data)
  return(
    <div className="flex gap-4">
      <XPBlock properties={data.properties} id={data.id}/>
    </div>
  )
}