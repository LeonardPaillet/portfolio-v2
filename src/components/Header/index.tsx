export default function Header(){
  return(
    <header className="bg-blue flex justify-between items-center py-4 px-24 fixed z-20">
      <div>
        <p className="uppercase">Léonard Paillet</p>
      </div>
      <div className="flex gap-12 font-bold text-lg">
        <a href="#">ACCUEIL</a>
        <a href="#">PROJETS</a>
        <a href="#">FORMATION</a>
        <a href="#">CONTACT</a>
      </div>
    </header>
  )
}