

import { XP } from "./XP"



export default function Experience({dataXP}: any){
  
  return(
    <div>
      <div className="flex flex-col gap-4">
        {dataXP.results.map((xp, index : number)=>(
          <XP key={index} data={xp}/>
          
        ))}
      </div>
      
    </div>
  )
}