//On importe la Bibliothèque react-icons
import { FiSearch } from "react-icons/fi";

//On définit la structure du Props
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}


//On exporte par défaut le composant SearchBar
export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    // Le contenaur principale de la barre de recherche 
    <div className="relative max-w-sm">
      {/* L'icone */}
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      {/* Le champ de saisi */}
      <input
        type="text"
        placeholder="Rechercher une salle..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}