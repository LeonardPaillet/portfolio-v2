import { XP } from "./XP"

export default function Experience({dataXP}){
  return(
    <div>
      <div className="flex flex-col gap-4">
        {dataXP.results.map((xp, index)=>(
          <XP key={index} data={xp}/>
          
        ))}
      </div>
      
    </div>
  )
}