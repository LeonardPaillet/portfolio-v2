"use client"
import { formatDateToMonthYear } from "@/services/utils"

export function XPBlock({properties, id}){
  const link_xp = "/experiences/"+id
  return(
    <div className="flex flex-col gap-4 p-8 bg-white rounded text-grey font-medium w-[480px]">
      <h2 className="font-bold text-lg uppercase">{properties.Contrat.select.name} - {properties.Titre.title[0].plain_text}</h2>
      <div className="flex flex-col gap-6">
        <XPLocation office={properties.Structure.select.name} town={properties.Lieux.select.name}/>

        <XPTimeSpend time={properties.Durée.rich_text[0].plain_text}/>

        <XPDates dates={properties.Période.date}/>
        <a href={link_xp} className="bg-darkBlue text-white text-center rounded py-2 hover:bg-darkViolet hover:scale-105">Voir plus</a>
      </div>
    </div>
  )
}

function XPLocation({office, town}){
  return(
    <div className="flex items-center gap-4">
      <img src="./company.svg" alt="émoticones sac de travail" width={"8%"}/>
      <p>{office} - {town}</p>
    </div>
  )
}

function XPTimeSpend({time}){
  return(
    <div className="flex items-center gap-4">
      <img src="./hourglass.svg" alt="émoticones sablier" width={"8%"}/>
      <p>{time}</p>
    </div>
  )
}

function XPDates({dates}){
  return(
    <div className="flex items-center gap-4">
      <img src="./calendar.svg" alt="émoticones calendrier" width={"8%"}/>
      <p>
        {formatDateToMonthYear(dates.start)} - {formatDateToMonthYear(dates.end)}
      </p>
      
    </div>
  )
}