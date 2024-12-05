"use client"


import { ProjectShortDescription } from "./ProjectShortDescription";
import { ProjectTitle } from "./ProjectTitle";


export default function Project({project}: any){

  console.log(project.properties)
  let nb_group = parseInt(project.properties.Groupe.select.name)
  //project.properties['Image pres'].files[0].file.url
  return(
    <div className="bg-gradient-to-br from-darkViolet from-36% to-violet border border-white border-4 rounded w-[500px] h-[500px] p-8 text-start text-lg flex flex-col justify-between">
      <div className="flex justify-center h-32 relative overflow-hidden">
        <img className="h-full" src={project.properties['Image pres'].files[0].file.url}/>
      </div>
      <div className="flex flex-col gap-4">
        <ProjectTitle projectName={project.properties.Nom}/>
        <ProjectShortDescription projectDescription={project.properties['Courte description']}/>
        <div className="flex items-center gap-4">
          <img src="./people.svg" alt="émoticones sablier"/>
          {
            nb_group > 1 ? (
              <p>{project.properties.Groupe.select.name} personnes</p>
            ) : (
              <p>{project.properties.Groupe.select.name} personne</p>
            )
          }
          
        </div>
        
      </div>
      
      <button className=" font-semibold border border-white border-4 rounded py-2 px-6 text-2xl"> En savoir plus</button>
    </div>
  )
}