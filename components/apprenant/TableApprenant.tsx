import { FiEdit3, FiTrash2 } from "react-icons/fi";
import "@/style/globals.css";
import "tailwindcss";

// Structure d'un apprenant
export interface Apprenant {
    id: number;
    nomComplet: string;
    matricule: string;
    groupe: string;
    email: string;
    telephone: string;
    statut: "Actif" | "Inactif";
}

// structure du props
interface TableApprenantsProps {
    apprenants: Apprenant[];
    onEdit?: (apprenant: Apprenant) => void;
    onDelete?: (apprenant: Apprenant) => void;
}

export default function TableApprenants({ apprenants, onEdit, onDelete }: TableApprenantsProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full font-inter">
                <thead>
                    <tr className="border-b border-gray-50 shadow">
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Nom complet</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Matricule</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Groupe</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Email</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Téléphone</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Statut</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {apprenants.map((apprenant) => (
                        <tr key={apprenant.id} className="border-b border-gray-50 shadow cursor-pointer hover:bg-gray-50 duration-500">
                            <td className="px-4 py-4 font-medium text-gray-900">{apprenant.nomComplet}</td>
                            <td className="px-4 py-4 text-gray-1">{apprenant.matricule}</td>
                            <td className="px-4 py-4 text-gray-1">{apprenant.groupe}</td>
                            <td className="px-4 py-4 text-gray-1">{apprenant.email}</td>
                            <td className="px-4 py-4 text-gray-1">{apprenant.telephone}</td>
                            <td className="px-4 py-4">
                                <span
                                    className={`flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-xs font-medium ${
                                        apprenant.statut === "Actif"
                                            ? "bg-green-50 text-green-700"
                                            : "bg-yellow-50 text-yellow-700"
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${apprenant.statut === "Actif" ? "bg-green-500" : "bg-yellow-500"}`} />
                                    {apprenant.statut}
                                </span>
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">
                                    <button onClick={() => onEdit?.(apprenant)} className="p-2 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100">
                                        <FiEdit3 className="text-gray-1 w-4 h-4" />
                                    </button>
                                    <button onClick={() => onDelete?.(apprenant)} className="p-2 rounded-lg bg-red-50 cursor-pointer hover:bg-red-100">
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