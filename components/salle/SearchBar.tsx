//On importe l'icône de loupe/recherche de puis la bibliothèque react-icons
import { FiSearch } from "react-icons/fi";

//Le composant barre de recherche
export default function SearchBar() {
  return (
    // Le conteneur principal de la barre de recherche
    <div className="relative max-w-sm">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      {/* Le input  */}
      <input
        type="text"
        placeholder="Rechercher une salle..."
        className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}