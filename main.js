$(document).ready(function(){

	//Création d'une carte
	$("#addCard").click(function(){
			newCard = new Card();
			$('#cards').append("<div class='card-block'>"+ newCard.question+ "</div>");
		});

	//Affichage des cartes
	$("#listCards").click(function(){
			listCards();
		});

});
//Initialisation de la table des cartes
cards = [];

//Fonction de création d'une carte
function Card(){
	this.question = prompt("votre question ? ");
	this.answer = prompt("Votre réponse : ");
	this.id = cards.length + 1;
}

//Fonction d'affichage des cartes
var listCards = function(){
	for (i=0; i <= cards.length; i++){
		console.log(cards[i]);
	}
}

// for (i=0; i <= cards.length; i++){
// 	console.log ("Carte " + i+1);
// 	console.log("La question est : " + cards[i].question+ ". Et la réponse est : " +cards[i].answer);
// }


	// function Card(question,answer) {
	// 	this.question = question;
	// 	this.answer = answer;
	// }

	//
	// cards[0] = new Card (prompt("Question :"),prompt("Answer :"));
	// cards[1] = new Card (prompt("Question :"),prompt("Answer :"));





	/*$('#addCard').click(function(){
			console.log("New card creation");
			cards[cards.length + 1] = new Card;
	})*/
