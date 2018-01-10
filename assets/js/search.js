var generateInfo = function(code){
	var link = "https://www.omdbapi.com/?apikey=3a181f1c&i=" + code;
	$.getJSON(link).then(function(response){
		//console.log(response);
		//console.log(response.Genre + response.Title);
		/*
		* comprobar que 'movie' sea de género sci-fi
		*/
		if(response.Response == "True" && response.Genre.indexOf("Sci-Fi") !== -1 && response.Type == "movie"){
			//console.log(response.Genre.indexOf("Sci-Fi"));
			var title = response.Title;
			var year = response.Year;
			var director = response.Director;
			var plot = response.Plot;
			var poster = response.Poster;
			var actors = response.Actors
			var imdbID = response.imdbID
			/*
			* insertando datos en el contenido html
			*/
			var html = "<div class='row movie vertical-align'>"+
						"<span class='code'>" + imdbID + "</span>" +
						"<div class='col-md-3 col-xs-12 img-container text-center'>"+
						"<img src="+ poster +"alt='Movie'>"+
					"</div>"+
					"<div class='col-md-8 col-xs-12 info-container'>"+
						"<h4 class=title>"+ title + "</h4>"+ "<span class='more'>see more</span>" +
						"<span class='main'>"+
							"<span class='bold'>Director: </span><span class='director'>"+ director + "</span>"+
						"</span>"+
						"<span class='main'>"+
							"<span class='bold'>Year: </span><span class='year'>" + year + "</span>"+
						"</span>"+
						"<span class='main'>"+
							"<span class='bold'>Cast: </span><span class='actors'>"+ actors + "</span>"+
						"</span>"+
						"<hr>"+
						"<p class='short-plot'><span class='bold'>Plot: </span>"+ plot + "</p>"+
						"<hr class='last-hr'>"+
					"</div>"+
					"<div class='col-md-1 col-xs-12 icons-container'>"+
						"<ul>"+
							"<li class='heart not-active'><i class='far fa-heart fa-2x'></i></li>"+
							"<li class='garbage not-active'><i class='far fa-trash-alt fa-2x'></i></li>"+
							"<li class='see-later not-active'><i class='far fa-clock fa-2x'></i></li>"+
							"<li class='check not-active'><i class='far fa-check-circle fa-2x'></i></li>"+
						"</ul>"
					"</div>"
				"</div>";
				$(".movies-container").append(html);
		}else {
			//console.log("Movie not found!");
		}
	})

}
/*
* ejemplo Sci-Fi, ejemplo sin Sci-Fi
*/
// generateInfo("interstellar");
// generateInfo("la la land");
/*
* función para búsqueda con varios resultados
*/
var generateResults = function(movieInput){
	var link = "https://www.omdbapi.com/?apikey=3a181f1c&s=" + movieInput + "&plot=short";
	$.getJSON(link).then(function(response){
		console.log(response);
		movie = response.Search;
		/*
		* cuando "response" es un string false, es porque el título no existe
		*
		*/
		if (response.Response == "False") {
			$(".movie-not-found").show();
		}else {
			for(var i = 0; i < movie.length; i++){
				//console.log(movie[i].imdbID); //todas las películas que calzan con la búsqueda
				generateInfo(movie[i].imdbID);
			}
		}
	})
	/*
	* interacción con el contenido generado e insertado anteriormente ***********
	*/
	setTimeout(function() {
		$(".more").click(function(){
			/*
			* extrayendo código imdb para insertar datos en el perfil de la página
			*/
			console.log($(this).parents()[1]);
			var div = $(this).parents()[1];
			div = $(div).children()[0];
			console.log(div);
			var code = $(div).text();
			console.log(code);
			
		})
		/*
		* interacción con los íconos
		*/
		$(".heart").click(function(){
			if($(this).hasClass("not-active")){
				$(this).removeClass("not-active");
				// qué hacer con la película en caso de que le demos click al corazón vacío
			}else{
				$(this).addClass("not-active");
				// qué hacer con la película en caso de que le demos click al corazón lleno
			}

			if($(this).hasClass("not-active")){
				$(this).html("<i class='far fa-heart fa-2x'></i>");
			}else{
				$(this).html("<i class='fas fa-heart fa-2x'></i>");
			}
		})

		$(".garbage").click(function(){
			if($(this).hasClass("not-active")){
				$(this).removeClass("not-active");
				// qué hacer con la película en caso de que le demos click al garbage vacío
			}else{
				$(this).addClass("not-active");
				// qué hacer con la película en caso de que le demos click al garbage lleno
			}
			if($(this).hasClass("not-active")){
				$(this).html("<i class='far fa-trash-alt fa-2x'>");
			}else{
				$(this).html("<i class='fas fa-trash-alt fa-2x'>");
			}
		})

		$(".see-later").click(function(){
			if($(this).hasClass("not-active")){
				$(this).removeClass("not-active");
				// qué hacer con la película en caso de que le demos click al reloj vacío
			}else{
				$(this).addClass("not-active");
				// qué hacer con la película en caso de que le demos click al reloj lleno
			}

			if($(this).hasClass("not-active")){
				$(this).html("<i class='far fa-clock fa-2x'></i>");
			}else{
				$(this).html("<i class='fas fa-clock fa-2x'>");
			}
		})

		$(".check").click(function(){
			if($(this).hasClass("not-active")){
				$(this).removeClass("not-active");
				// qué hacer con la película en caso de que le demos click al check vacío
			}else{
				$(this).addClass("not-active");
				// qué hacer con la película en caso de que le demos click al check lleno
			}

			if($(this).hasClass("not-active")){
				$(this).html("<i class='far fa-check-circle fa-2x'></i>");
			}else{
				$(this).html("<i class='fas fa-check-circle fa-2x'></i>");
			}
		})
	}, 1500);
}
// generateResults("interstellar");

/*
* función de click al btn enter
*/
$(".btn-search").click(function onClick(){
	if($(".movie-input").val().length == 0){
		
	}
	var movie = $(".movie-input").val();
	$(".movie-not-found").hide();
	$(".movies-container").empty();
	generateResults(movie);
})


$(".heart").click(function(){
	if($(this).hasClass("not-active")){
		$(this).removeClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón vacío
	}else{
		$(this).addClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón
	}

	if($(this).hasClass("not-active")){
		$(this).html("<i class='far fa-heart fa-2x'></i>");
	}else{
		$(this).html("<i class='fas fa-heart fa-2x'></i>");
	}
})

$(".garbage").click(function(){
	if($(this).hasClass("not-active")){
		$(this).removeClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón vacío
	}else{
		$(this).addClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón
	}

	if($(this).hasClass("not-active")){
		$(this).html("<i class='far fa-trash-alt fa-2x'>");
	}else{
		$(this).html("<i class='fas fa-trash-alt fa-2x'>");
	}
})

$(".see-later").click(function(){
	if($(this).hasClass("not-active")){
		$(this).removeClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón vacío
	}else{
		$(this).addClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón
	}

	if($(this).hasClass("not-active")){
		$(this).html("<i class='far fa-clock fa-2x'></i>");
	}else{
		$(this).html("<i class='fas fa-clock fa-2x'>");
	}
})

$(".check").click(function(){
	if($(this).hasClass("not-active")){
		$(this).removeClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón vacío
	}else{
		$(this).addClass("not-active");
		// qué hacer con la película en caso de que le demos click al corazón
	}

	if($(this).hasClass("not-active")){
		$(this).html("<i class='far fa-check-circle fa-2x'></i>");
	}else{
		$(this).html("<i class='fas fa-check-circle fa-2x'></i>");
	}
})


$(".movies-container .title").click(function(){
	alert("título: " + $(this).text());
})

