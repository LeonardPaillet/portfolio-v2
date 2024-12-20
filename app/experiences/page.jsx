import { getXP } from "@/services/api/experience"
import Experience from "@/src/components/Experience"

export default async function Experiences() {
  const xp = await getXP()
  return(
    <main>
      <section>
        <h1>FORMATION & EXPERIENCES</h1>
        <Experience dataXP={xp}/>
      </section>
    </main>
  )
  
}