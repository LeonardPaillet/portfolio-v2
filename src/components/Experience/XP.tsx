"use server"
import { getPageBlock } from "@/services/api/page"
import { XPBlock } from "./XPBlock"
import { XPDescribe } from "./XPDescribe"

export async function XP({data} : any){
  const descriptionPage = await getPageBlock({pageId : data.id})
  return(
    <div className="flex gap-4">
      <XPBlock properties={data.properties}/>
      <XPDescribe data={descriptionPage}/>
    </div>
  )
}