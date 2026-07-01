"use client";

import { useState } from "react";
import Table from "@/components/salle/Table"; //On importe le composant Table 
import Header from "@/components/salle/Header";//On importe le composant Header
import SearchBar from "@/components/salle/SearchBar";//On importe le composant SearchBar
import Pagination from "@/components/salle/Pagination";//On importe le composant Pagination

//On définit le tableau d'objets que va contenir le composant Table
const salles = [
	{
	id:1,
	nom  : "Salle 101",
	formation : "Formation A",
	responsable : "Pierre Dubois",
	chefDeClasse : "Marie Curie",
	capacite : 20,
	effectif : 30,
	ordinateurs : 18,
	},

	{
	id:2,
	nom  : "Salle 102",
	formation : "Formation A",
	responsable : "Pierre Dubois",
	chefDeClasse : "Louis Pasteur",
	capacite : 25,
	effectif : 35,
	ordinateurs : 24,
	},

	{
	id:3,
	nom  : "Salle 201",
	formation : "Formation A",
	responsable : "Isabelle Moreau",
	chefDeClasse : "Jean Moulin",
	capacite : 30,
	effectif : 45,
	ordinateurs : 28,
	},

	{
	id:4,
	nom  : "Salle 202",
	formation : "Formation B",
	responsable : "Michelle Faure",
	chefDeClasse : "Sophie Germain",
	capacite : 20,
	effectif : 45,
	ordinateurs : 19,
	},

	{
	id:5,
	nom  : "Salle 301",
	formation : "Formation B",
	responsable : "Michelle Faure",
	chefDeClasse : "Victor Hugo",
	capacite : 40,
	effectif : 45,
	ordinateurs : 38,
	},

]

/**
 * Page qui affiche toutes les salles de classes
 * @returns 
 */
// Le nombre d'items par page 
const ITEMS_PER_PAGE = 3;

export default function AllSalles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrage selon la recherche (insensible à la casse)
  const filteredSalles = salles.filter((salle) =>
    salle.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Découpage en pages
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSalles = filteredSalles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
		// La section générale qui contient la page AllSalle
		<section className="p-4 sm:p-8">
			{/* Le header */}
            <Header 
                title="Salles" 
                subtitle="Liste des salles disponibles" 
                buttonLabel="Nouvelle salle" 
                onButtonClick={() => console.log("ouvrir modal salle")}
            />
			{/* Le conteneur principale de la barre de recherche du tableau et de la pagination*/}
			<div className="bg-white rounded-xl shadow-sm border border-gray-100">
				{/* Le conteneur de la barre de recherche */}
				<div className="p-4 border-b border-gray-100">
					<SearchBar
                        value={searchTerm}
                        onChange={(value) => {
                            setSearchTerm(value);
                            setCurrentPage(1);
                        }}
                        placeholder="Rechercher une salle..."
                    />
                </div>
				{/* Le tableau des salles */}
				<Table salles={paginatedSalles} />
				 
				{/* Le système de pagination du tableaun des salles */}
				<Pagination
                     currentPage={currentPage}
                    totalItems={filteredSalles.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    onPageChange={setCurrentPage}
                    itemLabel="salles"
                />
			</div>
    	</section>
	);
}


