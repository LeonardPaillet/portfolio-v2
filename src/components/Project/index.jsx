"use client"


import Link from "next/link";
import { ProjectShortDescription } from "./ProjectShortDescription";
import { ProjectTitle } from "./ProjectTitle";

import Image from 'next/image'


export default function Project({project}){

  //console.log(project.properties)
  const link_project = "/projects/"+project.id
  const nb_group = parseInt(project.properties.Groupe.select.name)
  const logo = project.properties['Image pres'].files[0].file.url
  return(
    <div className="bg-gradient-to-br from-darkViolet from-36% to-violet border border-white border-4 rounded w-[500px] h-[500px] p-8 text-start text-lg flex flex-col justify-between">
      <div className="flex justify-center h-32 relative overflow-hidden">
        <Image width={200} height={200} src={logo} alt={project.properties.Nom}/>
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
      
      <Link href={{
        pathname: link_project,
        }} className=" font-semibold border border-white border-4 rounded py-2 px-6 text-2xl"> En savoir plus</Link>
    </div>
  )
}