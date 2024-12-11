"use client"

import { PageProjectBlock } from "@/src/components/Project/PageProjectBlock"

export function ProjectPageComponent({project}: any){
  return(
    <div className="flex flex-col gap-2">
      {project.results.map((block : any, index : number)=>(
        <PageProjectBlock key={index} block={block} />                
      ))}
    </div>
  )
}