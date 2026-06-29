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
export default function AllSalles() {
    return (
		<section className="p-4 sm:p-8">
			{/* L'entête */}
			<Header/>
			{/* La carte blanche qui contient la barre de recherche, le tableau et la pagination */}
      		<div className="bg-white rounded-xl shadow-sm border border-gray-100">
       			<div className="p-4 border-b border-gray-100">
					{/* La barre de recherche */}
					<SearchBar/>
				</div>
				{/* Le tableau */}
				<Table salles={ salles } />

				{/* Le panneau de pagination */}
				<Pagination/>
			</div>
    	</section>
	);
}
