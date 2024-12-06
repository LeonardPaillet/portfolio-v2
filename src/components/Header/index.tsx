export default function Header(){
  return(
    <header className="bg-blue flex justify-between items-center py-4 px-24">
      <div>
        <p className="uppercase">Léonard Paillet</p>
      </div>
      <div className="flex gap-24 font-bold text-md">
        <a href="#">ACCUEIL</a>
        <a href="#">PROJETS</a>
        <a href="#">FORMATION</a>
        <a href="#">CONTACT</a>
      </div>
    </header>
  )
}