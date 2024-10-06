"use client"


import { ProjectShortDescription } from "./ProjectShortDescription";
import { ProjectTitle } from "./ProjectTitle";


export default function Project({project}: any){
  console.log(project.properties)
  //project.properties['Image pres'].files[0].file.url
  return(
    <div className="bg-gradient-to-br from-darkViolet from-36% to-violet border border-white border-4 rounded w-[500px] h-[500px] p-8 text-start text-lg flex flex-col justify-between">
      <div className="flex justify-center h-32 relative overflow-hidden">
        <img className="h-full" src={project.properties['Image pres'].files[0].file.url}/>
      </div>
      <div>
        <ProjectTitle projectName={project.properties.Nom}/>
        <ProjectShortDescription projectDescription={project.properties['Courte description']}/>
        <p>{project.properties.Groupe.select.name} personne</p>
      </div>
      
      <button className=" font-semibold border border-white border-4 rounded py-2 px-6 text-2xl"> En savoir plus</button>
    </div>
  )
}