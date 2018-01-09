var generateInfo = function(movie){
	var link = "https://www.omdbapi.com/?apikey=3a181f1c&t=" + movie;
	$.getJSON(link).then(function(response){
		console.log(response);
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
	})
}
/*
* Ejemplo
*/
generateInfo("interstellar");


/*
* cuando "response" es false, es porque el título no existe
*
*/