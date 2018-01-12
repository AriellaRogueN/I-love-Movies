/* var generateInfo = function(movie){
	var link = "https://www.omdbapi.com/?apikey=3a181f1c&t=" + movie;
	$.getJSON(link).then(function(response){
		console.log(response);
		console.log(response.Genre.indexOf("Sci-Fi"));
		
		* comprobar que 'movie' sea de género sci-fi
		
		if(response.Response == "True" && response.Genre.indexOf("Sci-Fi") !== -1){
			console.log(response.Genre.indexOf("Sci-Fi"));
			var title = response.Title;
			var year = response.Year;
			var director = response.Director;
			var writer = response.Writer;
			var otherGenre = response.Genre;
			var language = response.Language;
			var plot = response.Plot;
			var poster = response.Poster;
			var rating = response.imdbRating;
			// INSERTAR DATOS ANTERIORES EN CONTENIDO HTML
		}else {
			console.log("Movie not found!")
		}
	})
}

 ejemplo Sci-Fi, ejemplo sin Sci-Fi
generateInfo("interstellar");
generateInfo("la la land");

* cuando "response" es un string false, es porque el título no existe
*
*/

/*
*
* Variables vistas
*hide:
var hideSearchResults= $(".search-results").hide();
var hideProfile= $(".background-profile").hide();
var hideMoviesDescription= $("#container-movies").hide();
var hideRecentActivity= $(".users").hide();
var hideMoviesComments= $(".movies-comments").hide();
var hideCarrousel= $(".section-white").hide();
var hideFirsTime= $(".first-time").hide();
*show
var showSearchResults= $(".search-results").show();
var showProfile= $(".background-profile").show();
var showMoviesDescription= $("#container-movies").show();
var showRecentActivity= $(".users").show();
var showMoviesComments= $(".movies-comments").show();
var showCarrousel= $(".section-white").show();
var showFirsTime= $(".first-time").show();
*/

$(document).ready(function() {

/*
* vista principal sin login
*/
var hideSearchResults= $(".search-results").hide();
var hideProfile= $(".background-profile").hide();
var hideMoviesDescription= $("#container-movies").hide();
var showRecentActivity= $(".users").show();
var hideMoviesComments= $(".movies-comments").hide();
var showCarrousel= $(".section-white").show();
var showFirsTime= $(".first-time").show();
/*
* click en .back vista de profile usuario
*/
$(".back").click(function() {
	var hideSearchResults= $(".search-results").hide();
	var hideProfile= $(".background-profile").hide();
	var hideMoviesDescription= $("#container-movies").hide();
	var hideRecentActivity= $(".users").hide();
	var hideMoviesComments= $(".movies-comments").hide();
	var hideCarrousel= $(".section-white").hide();
})
/*
* click en #signin
*/
$("#sign-in").click(function() {
	var hideFirsTime= $(".first-time").hide();
	var hideSearchResults= $(".search-results").hide();
	var hideProfile= $(".background-profile").hide();
	var hideMoviesDescription= $("#container-movies").hide();
	var showRecentActivity= $(".users").show();
	var hideMoviesComments= $(".movies-comments").hide();
	var showCarrousel= $(".section-white").show();
	$(".space").append("")


})

/*
* vista c/login
*/
		var hideSearchResults= $(".search-results").hide();
		var hideProfile= $(".background-profile").hide();
		var hideMoviesDescription= $("#container-movies").hide();
		var hideRecentActivity= $(".user").hide();
/*
* agregar comentarios seccion movie
*/
$("#ad-comment").click(function() {
	var comments = $("#comment-box").val();
	$("#new-comment").append("<div id='new-commentbox' class='media'>" +
		"<a class='pull-left' href='#'><img class= img-responsive  src='http://www.msnanimal.cl/emoticons/animales_perros_y_gatos/emoticons_animales_msnanimal_com-257.gif' alt = ''></a>" +
		"<div class='media-body'>" +
		"<h4 class='media-heading'>UserName</h4>" +
		"<p>" + comments + "</p>" +
		"<ul class='list-unstyled list-inline media-detail pull-left'>" +
		"<li><i class='fa fa-calendar'></i>27/02/2014</li>" +
		"<li><i class='fa fa-thumbs-up'></i>13</li>" +
		"</ul>" +
		"<ul class='list-unstyled list-inline media-detail pull-right'>" +
		"<li class=''><a href=''>Compartir</a></li>" +
		"</ul>" + "</div>" + "</div>")
		
		$("#comment-box").val("");

		
	/*Fin comentarios*/
});

})












/*Funcion de splash-no funcionando*/

function load(){
	var url = 'index.html';
	setTimeout(function () {
		$('.splash').fadeOut(500);
	}, 3000);
	setTimeout(function () {
		$(location).attr('href', 'splash.html').fadeIn(500)
	}, 3000);
}

