export function ProjectShortDescription({projectDescription}: any){
  console.log(projectDescription)
  let shortDescription = "Pas de description"
  if(projectDescription.rich_text[0].plain_text){
    shortDescription = projectDescription.rich_text[0].plain_text
  }
  return(
    <p>{shortDescription}</p>
  )
}