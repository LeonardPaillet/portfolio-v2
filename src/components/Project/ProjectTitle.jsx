export function ProjectTitle({projectName}){
  let name = "Pas de titre"
  if(projectName.title[0].text.content){
    name = projectName.title[0].text.content
  }

  
  return(
    <p className="font-semibold">{name}</p>
  )
}