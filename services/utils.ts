export function formatDateToMonthYear(dateString : string) {
  // Créer un objet Date à partir de la chaîne de caractères
  const date = new Date(dateString);

  // Tableau pour les mois en français
  const months = [
    "Jan", "Fév", "Mars", "Avril", "Mai", "Juin", 
    "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
  ];

  // Récupérer le mois et l'année
  const month = months[date.getMonth()]; // getMonth() retourne un index (0-11)
  const year = date.getFullYear();

  // Retourner le format "Mois Année"
  return `${month} ${year}`;
}

export function removeHyphens(str : string){
  return str.replace(/-/g, '');
}
