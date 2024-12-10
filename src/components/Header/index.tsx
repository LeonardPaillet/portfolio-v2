export default function Header(){
  return(
    <header className="bg-blue flex justify-between items-center py-8 px-24 font-semibold text-md">
      <a href="/" className="flex gap-4 items-center">
        <img src="../logo.svg" alt="Logo" width={"20%"}/>
        <p className="uppercase">Léonard Paillet</p>
      </a>
      <div className="flex gap-24 ">
        <HeaderLinks name="ACCUEIL" url="/"/>
        <HeaderLinks name="PROJETS" url="/projects"/>
        <HeaderLinks name="FORMATION" url="/experiences"/>
        <HeaderLinks name="CONTACT" url="/contact"/>
      </div>
    </header>
  )
}

interface HeaderLinkProps{
  url : string;
  name : string;
}

function HeaderLinks({url, name}: HeaderLinkProps){
  return(
    <a href={url} className="group hover:text-lightBlue duration-300">
      {name}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-lightBlue"></span>
    </a>
  )
}