import Link from "next/link";
import { notFound } from "next/navigation";
import "@/style/globals.css";
import "tailwindcss";

// Structure d'un emprunt (un élément de l'historique d'un apprenant)
interface Emprunt {
    id: number;
    date: string;
    designation: string; // le nom de l'objet emprunté 
    statut: "Retourné" | "Actuellement emprunté";
}

// Structure complète d'un apprenant
interface Apprenant {
    id: number;
    nomComplet: string;
    prenom: string;
    nom: string;
    matricule: string;
    groupe: string;
    email: string;
    telephone: string;
    statut: "Actif" | "Inactif";
    dateNaissance: string;
    genre: "Homme" | "Femme";
    emprunts: Emprunt[]; // la liste des emprunts de cet apprenant
}

// Les mêmes données que dans la page liste (à garder synchronisées pour l'instant)
const apprenants: Apprenant[] = [
    {
        id: 1,
        nomComplet: "Mamadou Diop",
        prenom: "Mamadou",
        nom: "Diop",
        matricule: "APP-2024-0014",
        groupe: "GLSI 1",
        email: "m.diop@campus.sn",
        telephone: "77 123 45 67",
        statut: "Actif",
        dateNaissance: "12/05/2003",
        genre: "Homme",
        emprunts: [
            { 
                id: 1, 
                date: "01/10/2023", 
                designation: "Ordinateur Dell XPS", 
                statut: "Retourné" 
            },
            { 
                id: 2, 
                date: "15/09/2023", 
                designation: "Câble HDMI", 
                statut: "Retourné" 
            },
            { 
                id: 3, 
                date: "20/08/2023", 
                designation: "Ordinateur Lenovo ThinkPad", 
                statut: "Actuellement emprunté" 
            },
        ],
    },
    // le reste de tes apprenants ici
];

// Le Props de la page 
interface PageProps {
    params: Promise<{ id: string }>;
}

/**
 * Page qui affiche un apprenant en particulier
 */
export default async function OneStudents({ params }: PageProps) {
    // On récupère l'id depuis l'URL
    const { id } = await params;

    // On cherche l'apprenant correspondant dans notre liste de données
    // Number(id) car l'id venant de l'URL est toujours une chaîne de caractères (string)
    const apprenant = apprenants.find((a) => a.id === Number(id));

    // Si aucun apprenant ne correspond à cet id, on affiche la page 404 de Next.js
    if (!apprenant) {
        notFound();
    }

    return (
        <section className="p-4 sm:p-6">
            {/* Le titre de la page et le fil d'Ariane (Apprenants > Nom de l'apprenant) */}
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-roboto">Détails de l&apos;apprenant</h1>
                <p className="text-sm text-gray-1 font-inter break-word">
                    <Link href="/apprenant" className="hover:underline">Apprenants</Link>
                    {" › "}{apprenant.nomComplet}
                </p>
            </div>

            {/* Le grand encadré blanc qui contient toutes les infos */}
            <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-8">

                {/* SECTION 1 : Informations personnelles */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Informations personnelles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

                        {/* Prénom et Nom sont affichés sur une seule ligne, format "Label: valeur" */}
                        <p className="text-gray-900">
                            <span className="text-gray-1">Prénom:</span> {apprenant.prenom}
                        </p>
                        <p className="text-gray-900">
                            <span className="text-gray-1">Nom:</span> {apprenant.nom}
                        </p>

                        {/* Pour les autres champs, le label est au-dessus de la valeur */}
                        <div>
                            <p className="text-gray-1">Date de naissance</p>
                            <p className="font-medium text-gray-900">{apprenant.dateNaissance}</p>
                        </div>
                        <div>
                            <p className="text-gray-1">Genre</p>
                            <p className="font-medium text-gray-900">{apprenant.genre}</p>
                        </div>

                        <div>
                            <p className="text-gray-1">Numéro de téléphone</p>
                            <p className="font-medium text-gray-900">{apprenant.telephone}</p>
                        </div>
                        <div>
                            <p className="text-gray-1">Email</p>
                            <p className="font-medium text-gray-900 break-all">{apprenant.email}</p>
                        </div>
                    </div>
                </div>

                {/* SECTION 2 : Informations académiques */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Informations académiques</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-1">Matricule</p>
                            <p className="font-medium text-gray-900">{apprenant.matricule}</p>
                        </div>
                        <div>
                            <p className="text-gray-1 mb-1">Groupe</p>
                            {/* "disabled" = lecture seule pour l'instant, comme demandé */}
                            {/* w-full sur mobile pour ne pas déborder, w-auto sur desktop pour garder une taille naturelle */}
                            <select disabled defaultValue={apprenant.groupe} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900 w-full sm:w-auto">
                                <option>{apprenant.groupe}</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 : Historique des emprunts */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Historique des emprunts</h2>
                    {/* "divide-y" ajoute une ligne fine entre chaque emprunt, comme sur la maquette */}
                    <div className="divide-y divide-gray-100">
                        {apprenant.emprunts.length > 0 ? (
                            // On parcourt la liste des emprunts pour en afficher un par ligne
                            apprenant.emprunts.map((emprunt) => (
                                // flex-col sur mobile (empilé) pour éviter que le texte et le statut se chevauchent
                                // flex-row sur desktop (côte à côte) comme sur la maquette
                                <div key={emprunt.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 py-3 text-sm">
                                    <span className="text-gray-900">
                                        {emprunt.date} - {emprunt.designation}
                                    </span>
                                    {/* Le statut change de couleur selon s'il est retourné ou en cours */}
                                    <span className={emprunt.statut === "Actuellement emprunté" ? "text-orange-600 font-medium" : "text-gray-1"}>
                                        {emprunt.statut}
                                    </span>
                                </div>
                            ))
                        ) : (
                            // Message affiché si l'apprenant n'a encore jamais rien emprunté
                            <p className="text-sm text-gray-1 py-3">Aucun emprunt enregistré.</p>
                        )}
                    </div>
                </div>

                {/* Le bouton d'action en bas à droite */}
                <div className="flex justify-end">
                    <button className="w-full sm:w-auto bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 cursor-pointer">
                        Modifier l&apos;apprenant
                    </button>
                </div>
            </div>
        </section>
    );
}