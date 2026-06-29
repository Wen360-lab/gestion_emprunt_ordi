//On importe l'icône plus de react-icons
import { FiPlus } from "react-icons/fi";
//On importe le style 
import "@/style/globals.css"

//Le composant header de la page Salle : Il est constitué d'un titre (et un sous-titre) à gauche et d'un bouton à droite
export default function Header() {
    return (
        // Le conteneur
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            {/* La div contenant le titre et sous-titre */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 font-roboto">Salles</h1>
                <p className="text-sm text-gray-1 font-inter">Liste des salles disponibles</p>
            </div>
            {/* Le bouton qui permet d'ajouter une salle */}
            <button className="flex items-center gap-2 bg-primary shadow hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium font-inter cursor-pointer">
                <FiPlus />
                Nouvelle salle
            </button>
        </div>
    )
}