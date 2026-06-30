//On importe l'icône plus de react-icons
import { FiPlus } from "react-icons/fi";
//On importe le style 
import "@/style/globals.css"

// On définit le typage des props attendues
interface HeaderProps {
    title: string;
    subtitle: string;
    buttonLabel: string;
    onButtonClick?: () => void; // optionnel, pour brancher l'action du bouton plus tard
}

//Le composant header : Il est constitué d'un titre (et un sous-titre) à gauche et d'un bouton à droite
export default function Header({ title, subtitle, buttonLabel, onButtonClick }: HeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 font-roboto">{title}</h1>
                <p className="text-sm text-gray-1 font-inter">{subtitle}</p>
            </div>
            <button
                onClick={onButtonClick}
                className="flex items-center gap-2 bg-primary shadow hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium font-inter cursor-pointer"
            >
                <FiPlus />
                {buttonLabel}
            </button>
        </div>
    )
}