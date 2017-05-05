$(document).ready(function(){

	$('#addCardButton').click(function(){
		$('.modal').modal('show');
	});
	//Création d'une carte
	$("#createCard").click(function(){

		//Getting user inputs to generate card data
		question = $('#card-question').val();
		answer = $('#card-answer').val();

		//Setting cards table as an empty object
		var cards = [];

		//Call method with new card data
		newCard = new Card(question,answer);

		//Create DOM elements to display new card
		$('#cards').append("<div class='col-sm-12 card'></div>");
		$('.card:last').append("<div class='card-block col-sm-12'></div>");
		$('.card-block:last').append("<h4>"+ newCard.question+ "</h4>");
		$('.card-block:last').append("<p>"+ newCard.answer+ "</p>" );

		$('.modal').modal('hide');

	});



	//Affichage des cartes
	$("#listCards").click(function(){
		listCards();
		});

	//Fonction de création d'une carte
	function Card(question,answer){
		this.question = question; //$('#card-question').val();
		this.answer = answer; //$('#card-question').val();
		this.id = cards.length + 1;
		}
	});
