import Table from "@/components/Table"; //On importe le composant Table 

//On définit le tableau d'objets que va contenir le composant Table
const salles = [
	{
	id:1,
	nom  : "Salle 101",
	formation : "Formation A",
	responsable : "Pierre Dubois",
	chefDeClasse : "Marie Curie",
	capacite : 20,
	ordinateurs : 18,
	},

	{
	id:2,
	nom  : "Salle 102",
	formation : "Formation A",
	responsable : "Pierre Dubois",
	chefDeClasse : "Louis Pasteur",
	capacite : 25,
	ordinateurs : 24,
	},

	{
	id:3,
	nom  : "Salle 201",
	formation : "Formation A",
	responsable : "Isabelle Moreau",
	chefDeClasse : "Jean Moulin",
	capacite : 30,
	ordinateurs : 28,
	},

	{
	id:4,
	nom  : "Salle 202",
	formation : "Formation B",
	responsable : "Michelle Faure",
	chefDeClasse : "Sophie Germain",
	capacite : 20,
	ordinateurs : 19,
	},

	{
	id:5,
	nom  : "Salle 301",
	formation : "Formation B",
	responsable : "Michelle Faure",
	chefDeClasse : "Victor Hugo",
	capacite : 40,
	ordinateurs : 38,
	},

]

/**
 * Page qui affiche toutes les salles de classes
 * @returns 
 */
export default function AllSalles() {
    return (<>
        <h1>Page qui affiche l ensemble des classe</h1>
        <Table salles={ salles } />
    
    </>);
}
