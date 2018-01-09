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