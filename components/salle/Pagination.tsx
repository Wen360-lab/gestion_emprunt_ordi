//On importe les icônes < et > de la bibliothèque react-icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

//Le composant Pagination : se trouvant tout en bas de la page de visualisation des classes
export default function Pagination() {
  return (
    //Le conteneur principal
    <div className="flex justify-between items-center p-4 border-t border-gray-100 text-sm text-gray-1">
      <span>Affichage de 1 à 5 sur 5 salles</span>
      {/* Le contenaurs des boutons */}
      <div className="flex items-center gap-2">
        {/* Le bouton chevron ouvrant */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 cursor-pointer">
          <FiChevronLeft className="w-4 h-4" />
        </button>
        {/* Le Bouton indiquant le numéro de la page */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-medium">
          1
        </button>
        {/* Le bouton chevron fermant */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 cursor-pointer">
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}