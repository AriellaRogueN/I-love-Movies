var generateInfo = function(movie){
	var link = "https://www.omdbapi.com/?apikey=3a181f1c&t=" + movie;
	$.getJSON(link).then(function(response){
		console.log(response);
		console.log(response.Genre.indexOf("Sci-Fi"));
		/*
		* comprobar que 'movie' sea de género sci-fi
		*/
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
/*
* ejemplo Sci-Fi, ejemplo sin Sci-Fi
*/
generateInfo("interstellar");
generateInfo("la la land");


/*
* cuando "response" es un string false, es porque el título no existe
*
*/


/*----- Agregar comentarios seccion movie-----*/
$(document).ready(function () {


$("#ad-comment").click(function() {
	var comments = $("#comment-box").val();


	$("#new-comment").append("<div id='new-commentbox' class='media'>" +
		"<a class='pull-left' href='#'></a>" +
		"<div class='media-body'>" +
		"<h4 class='media-heading'>UserName</h4>" +
		"<p>" + comments + "</p>" +
		"<ul class='list-unstyled list-inline media-detail pull-left'>" +
		"<li><i class='fa fa-calendar'></i>27/02/2014</li>" +
		"<li><i class='fa fa-thumbs-up'></i>13</li>" +
		"</ul>" +
		"<ul class='list-unstyled list-inline media-detail pull-right'>" +
		"<li class=''><a href=''>Like</a></li>" +
		"<li class=''><a href=''>Dislike</a></li>" +
		"</ul>" + "</div>" + "</div>")

        $("#comment-box").val("");
})

	$(".back").click(function() {
		window.location="index.html";
	
})

	$("#signin").click(function() {
		window.location="search.html";
	
})

})



