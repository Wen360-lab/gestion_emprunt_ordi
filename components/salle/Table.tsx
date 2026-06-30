
//On importe les icônes de la bibliothèque react-icon
import { FiEdit3, FiTrash2} from "react-icons/fi";
import { PiDoorOpen } from "react-icons/pi";

//On importe le style
import "@/style/globals.css"
import "tailwindcss";


//On définit la structure d'une salle
interface Salle {
    id : number;
    nom : string;
    formation : string;
    responsable : string;
    chefDeClasse : string;
    capacite : number;
    effectif : number;
    ordinateurs : number
}

//On définit la structure du Props
interface TableProps {
  salles: Salle[];
}

//Le composant Tableau des salles: il prend en paramètre le tableau des objets définis dans ./salle/page.tsx
export default function Table({ salles }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full font-inter">
                <thead>
                    <tr className="border-b border-gray-50 shadow">
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Nom de la salle</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Formation</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Responsable</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Chef de classe</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Capacité</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Effectif</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Ordinateurs</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {salles.map((salle) => (
                    <tr key={salle.id} className="border-b border-gray-50 shadow cursor-pointer hover:bg-gray-50 duration-500">
                        <td className="px-4 py-4 flex items-center gap-2 font-medium text-gray-900"><PiDoorOpen className="bg-light text-primary p-1.5 rounded-md w-7 h-7"/> {salle.nom}</td>
                        <td  className="px-4 py-4 text-gray-1">{salle.formation}</td>
                        <td className="px-4 py-4 text-gray-1">{salle.responsable}</td>
                        <td className="px-4 py-4 text-gray-1">{salle.chefDeClasse}</td>
                        <td className="px-4 py-4 text-gray-1">{salle.capacite} place(s)</td>
                        <td className="px-4 py-4 text-gray-1">{salle.effectif}</td>
                        <td className="px-4 py-4 text-gray-1">{salle.ordinateurs} ordinateur(s)</td>
                        <td className="px-4 py-4">
                        <div className="flex gap-2">
                            {/* Le bouton d'édition/Modification */}
                            <button className="p-2 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100">
                                <FiEdit3 className="text-gray-1 w-4 h-4" />
                            </button>
                            {/* Le bouton de suppresion */}
                            <button className="p-2 rounded-lg bg-red-50 cursor-pointer hover:bg-red-100">
                                <FiTrash2 className="text-red-500 w-4 h-4" />
                            </button>
                        </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
    );
}
