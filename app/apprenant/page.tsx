"use client";

import { useState } from "react";
import Header from "@/components/salle/Header";//On importe le composant Header
import TableApprenants, { Apprenant } from "@/components/apprenant/TableApprenant";//On importe le composant TableApprenant
import SearchBar from "@/components/salle/SearchBar";//On importe le composant SearchBar
import Pagination from "@/components/salle/Pagination";//On importe le composant Pagination


//On crée un tableau d'apprenant
const apprenants: Apprenant[] = [
    { 
    id: 1, 
    nomComplet: "Mamadou Diallo", 
    matricule: "APP-2024-0001", 
    groupe: "Salle 101", 
    email: "mamadou.dialla@campus.sn", 
    telephone: "77 123 46 67", statut: "Actif" 
    },
    { 
    id: 2, nomComplet: "Awa Fall", 
    matricule: "APP-2024-0002", 
    groupe: "Salle 101", 
    email: "awa.fall@campus.sn", 
    telephone: "78 234 56 78", 
    statut: "Actif" 
    },
    { 
    id: 3, 
    nomComplet: "Ibrima Ba", 
    matricule: "APP-2024-0003", 
    groupe: "Salle 102", 
    email: "ibrahima.ba@campus.sn", 
    telephone: "78 345 67 89", 
    statut: "Actif" 
    },
    { 
    id: 4, 
    nomComplet: "Ndeye Diop", 
    matricule: "APP-2024-0004", 
    groupe: "Salle 103", 
    email: "ndeye.diop@campus.sn", 
    telephone: "77 456 78 80", 
    statut: "Actif" 
    },
    { 
    id: 5, 
    nomComplet: "Cheikh Sy", 
    matricule: "APP-2024-0005", 
    groupe: "Salle 201", 
    email: "cheikh.sy@campus.sn", 
    telephone: "78 567 89 01", 
    statut: "Inactif" 
    },
    { 
    id: 6, 
    nomComplet: "Astou Kane", 
    matricule: "APP-2024-0006", 
    groupe: "Salle 202", 
    email: "astou.kane@campus.sn", 
    telephone: "78 676 90 12", 
    statut: "Actif" 
    },
    { 
    id: 7, 
    nomComplet: "Ousmane Mbaye", 
    matricule: "APP-2024-0007", 
    groupe: "Salle 203", 
    email: "ousmane.mbaye@campus.sn", 
    telephone: "77 788 01 23", 
    statut: "Actif" 
    },
];

// On définit le nombre d'items présent dans le tableau
const ITEMS_PER_PAGE = 7;
   
/**
 * Page qui affiche tous les apprenants de chaque salles de classes
 * @returns 
*/
export default function AllStudents() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    
    const filteredApprenants = apprenants.filter((a) =>
        a.nomComplet.toLowerCase().includes(search.toLowerCase()) ||
        a.matricule.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase())
    );
    
    // On découpe la liste filtrée pour n'afficher que la page courante
    const paginatedApprenants = filteredApprenants.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    return (
        <section className="p-6">   
            <Header
                title="Apprenants"
                subtitle="Liste des apprenants enregistrés"
                buttonLabel="Nouvel apprenant"
                onButtonClick={() => console.log("ouvrir modal apprenant")}
            />

            <div className="bg-white rounded-xl shadow p-4">
                {/* Barre de recherche et filtres */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <SearchBar
                            value={search}
                            onChange={(v) => { setSearch(v); setCurrentPage(1); }} // on revient à la page 1 à chaque recherche
                            placeholder="Rechercher un apprenant..."
                         />
                    {/* Les options de filtrage */}
                    <select className="border border-gray-100 rounded-lg px-3 py-2 text-sm font-inter">
                        <option>Tous les groupes</option>
                    </select>
                    <select className="border border-gray-100 rounded-lg px-3 py-2 text-sm font-inter">
                        <option>Statut</option>
                        <option>Actif</option>
                        <option>Inactif</option>
                    </select>
                </div>

                {/* Tableau d'apprenants */}
                <TableApprenants apprenants={paginatedApprenants} />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalItems={filteredApprenants.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    onPageChange={setCurrentPage}
                    itemLabel="apprenants"
                />
            </div>
        </section>
    );
}