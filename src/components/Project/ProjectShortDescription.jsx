export function ProjectShortDescription({projectDescription}){
  //console.log(projectDescription)
  let shortDescription = "Pas de description"
  if(projectDescription.rich_text[0].plain_text){
    shortDescription = projectDescription.rich_text[0].plain_text
  }
  return(
    <p className="font-light">{shortDescription}</p>
  )
}