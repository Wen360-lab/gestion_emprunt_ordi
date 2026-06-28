
//On importe les icônes de la bibliothèque react-icon
import { FiEdit3, FiTrash2, FiPlus} from "react-icons/fi";
import { PiDoorOpen } from "react-icons/pi";


//On définit la structure d'une salle
interface Salle {
    id : number;
    nom : string;
    formation : string;
    responsable : string;
    chefDeClasse : string;
    capacite : number;
    ordinateurs : number
}

//On définit la structure du Props
interface TableProps {
  salles: Salle[];
}

//Le composant Tableau des salles il prend en paramètre le tableau des objets définis dans ./salle/page.tsx
export default function Table({ salles }: TableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom de la salle</th>
                    <th>Formation</th>
                    <th>Responsable</th>
                    <th>Chef de classe</th>
                    <th>Capacité</th>
                    <th>Ordinateurs</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {salles.map((salle) => (
                <tr key={salle.id}>
                    <td><PiDoorOpen /> {salle.nom}</td>
                    <td>{salle.formation}</td>
                    <td>{salle.responsable}</td>
                    <td>{salle.chefDeClasse}</td>
                    <td>{salle.capacite} place(s)</td>
                    <td>{salle.ordinateurs} ordinateur(s)</td>
                    <td><FiEdit3 /> <FiTrash2 /></td>
                </tr>
            ))}
            </tbody>
        </table>
        
    );
}
