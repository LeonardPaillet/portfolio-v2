"use client"
export function XPDescribe({data} : any){
  return(
    <div>
      {data.results.map((lines : any, index : number)=>(
        <div key={index}>
          <IsHeading data={lines} />
          
        </div>
        
      ))}
    </div>
  )
}

function IsHeading({data} : any){
  
  //data.paragraph.rich_text[0].plain_text
  if(data.type === "paragraph"){
    return <Paragraph data={data}/>
  }
  else{
    return 
  }
}

function Paragraph({data} :any){
  console.log(data)
  return(
    <div>
      {data.paragraph.rich_text.map((paragraph : any, index : number)=>(
        <p key={index}>
          {paragraph.plain_text}
        </p>
      ))}
    </div>
  )
}

function Heading({data} : any){
  return(
    <h2>

    </h2>
  )
}