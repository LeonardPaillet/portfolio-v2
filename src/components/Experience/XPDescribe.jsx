"use client"
export function XPDescribe({data} ){
  return(
    <div>
      {data.results.map((lines, index)=>(
        <div key={index}>
          <IsHeading data={lines} />
          
        </div>
        
      ))}
    </div>
  )
}

function IsHeading({data}){
  
  //data.paragraph.rich_text[0].plain_text
  if(data.type === "paragraph"){
    return <Paragraph data={data}/>
  }
  else{
    return 
  }
}

function Paragraph({data}){
  return(
    <div>
      {data.paragraph.rich_text.map((paragraph, index)=>(
        <p key={index}>
          {paragraph.plain_text}
        </p>
      ))}
    </div>
  )
}