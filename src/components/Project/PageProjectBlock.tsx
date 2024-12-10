export function PageProjectBlock({block} : any){
  //console.log(block.type)
  switch(block.type){
    case "heading_1" : return <Heading1 block={block}/>;
    break;
    case "heading_2" : return <Heading2 block={block}/>;
    break;
    case "heading_3" : return <Heading3 block={block}/>;
    break;
    case "paragraph" : return <Paragraph block={block}/>;
    break;
    case "bulleted_list_item" : return <BulletPoint block={block}/>;
    break;
    case "image" : return <ImageBlock block={block}/>;
    break;
    case "callout" : return <Callout block={block}/>;
    break;
  }
  return null
}

function Heading1({block} : any){
  const heading = block.heading_1.rich_text[0].plain_text
  return(
    <h1>{heading}</h1>
  )
}
function Heading2({block} : any){
  const heading = block.heading_2.rich_text[0].plain_text
  return(
    <h2 className="mt-14">{heading}</h2>
  )
}
function Heading3({block} : any){
  const heading = block.heading_3.rich_text[0].plain_text
  return(
    <h3 className="mt-8">{heading}</h3>
  )
}

function Paragraph({block} : any){
  if(block.paragraph.rich_text[0]){
    const paragraph = block.paragraph.rich_text[0].plain_text
    return(
      <p>{paragraph}</p>
    )
  }
  else{
    return null
  }
}

function BulletPoint({block} : any){
  const bullet_point = block.bulleted_list_item.rich_text[0].plain_text
  return(
    <div className="flex items-center gap-4">
      <span className="bg-lightBlue w-2 h-2 rounded"></span>
      <ul>{bullet_point}</ul>
    </div>
    
  )
}

function ImageBlock({block} : any){
  return(
    <img src={block.image.file.url}/>
  )
}

function Callout({block} : any){
  const text = block.callout.rich_text[0].plain_text
  console.log(block.callout)
  return(
    <div className="flex p-4 bg-grey rounded my-4 gap-4 border border-lightBlue">
      <p>{block.callout.icon.emoji}</p>
      <p>{text}</p>
    </div>
  )
}