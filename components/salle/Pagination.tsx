//On importe la bibliothèque react-icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


//On définit la structure du Props Pagination
//il contient entre autre : 
interface PaginationProps {
  currentPage: number; // la page courante (celle sur laquelle on se trouve)
  totalItems: number; // le nombre total d'éléments
  itemsPerPage: number; // le nombre total d'éléments par page
  onPageChange: (page: number) => void; // la fonction OnPa geChange qui prends en paramètre une page et ne retourne rien
}

//On crée ici la fonction qui permettra de paginer, elle prend en paramètre la page courante, le nombre total d'élément(salle) par page, et le nombre total d'éléments (salle); la fonction OnPageChange et le Props de la pagination
export default function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage); //Ça calcule combien de pages au total il faut pour afficher toutes les salles.
  const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1; //Ça calcule le numéro de la première salle affichée sur la page actuelle (le "1" dans "Affichage de 1 à 5").
  const end = Math.min(currentPage * itemsPerPage, totalItems); //Ça calcule le numéro de la dernière salle affichée sur la page (le "5" dans "Affichage de 1 à 5").

  return (
    <div className="flex justify-between items-center p-4 border-t border-gray-100 text-sm text-gray-1">
      {/* Le texte qui indique la page courante et le nombre total de page */}
      <span>Affichage de {start} à {end} sur {totalItems} salles</span>
      <div className="flex items-center gap-2">
        {/* Le chevron Ouvrant : permettant de revenir à la page précèdente */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 disabled:opacity-50 cursor-pointer"
          >
          <FiChevronLeft className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-medium">
          {currentPage}
        </button>

        {/* Le chevron Fermant : permettant de partir à la page suivante */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 disabled:opacity-50 cursor-pointer"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}