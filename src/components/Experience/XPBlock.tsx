"use client"
import { formatDateToMonthYear } from "@/services/utils"

export function XPBlock({properties} : any){
  return(
    <div className="flex flex-col gap-4 p-4 bg-slate-200 rounded">
      <h2>{properties.Contrat.select.name} - {properties.Titre.title[0].plain_text}</h2>
      <div className="flex flex-col gap-2">
        <XPLocation office={properties.Structure.select.name} town={properties.Lieux.select.name}/>

        <XPTimeSpend time={properties.Durée.rich_text[0].plain_text}/>

        <XPDates dates={properties.Période.date}/>
        <a href="#">Voir plus</a>
      </div>
    </div>
  )
}

function XPLocation({office, town} : any){
  return(
    <div className="flex items-center gap-4">
      <img src="./company.svg" alt="émoticones sac de travail"/>
      <p>{office} - {town}</p>
    </div>
  )
}

function XPTimeSpend({time} : any){
  return(
    <div className="flex items-center gap-4">
      <img src="./hourglass.svg" alt="émoticones sablier"/>
      <p>{time}</p>
    </div>
  )
}

function XPDates({dates} : any){
  return(
    <div className="flex items-center gap-4">
      <img src="./calendar.svg" alt="émoticones calendrier"/>
      <p>
        {formatDateToMonthYear(dates.start)} - {formatDateToMonthYear(dates.end)}
      </p>
      
    </div>
  )
}