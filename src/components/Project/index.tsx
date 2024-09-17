"use client"


import { ProjectShortDescription } from "./ProjectShortDescription";
import { ProjectTitle } from "./ProjectTitle";


export default function Project({project}: any){
  //console.log(project.properties)
  return(
    <div>
      <ProjectTitle projectName={project.properties.Nom}/>
      <ProjectShortDescription projectDescription={project.properties['Courte description']}/>
      <p>{project.properties.Groupe.type}</p>
    </div>
  )
}