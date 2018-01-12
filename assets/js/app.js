/*
* datos de usuario
*/
var user = {
	"name" : "Leticia Ferreira",
	"image" : "assets/images/avatar-helvette.jpg",
	"alias" : "Helvette",
	"age" : "23",
	"location" : "Santiago, Chile",
	"favorites" : ["tt0816692", "tt0062622"],
	"seeLater" : ["tt1392190", "tt0089530", "tt2064704"],
	"haveSeen" : ["tt0816692", "tt0062622"],
	"garbage" : []
}
$(document).ready(function(){
	/*
	*Funcion de splash-no funcionando
	*/
	function load(){
	  var url = 'index.html';
	  setTimeout(function () {
	    $('.splash').fadeOut(500);
	  }, 3000);
	  setTimeout(function () {
	    $(location).attr('href', 'splash.html').fadeIn(500)
	  }, 3000);
	}
	$(".first-time").show();
	$(".section-white").show();
	$(".movie-not-found").hide();
	$(".vista-newsfeed").hide();
	$(".vista-movie").hide();
	$(".profile-container").hide();
	$(".search-container").hide();
	$(".movies-container").hide();
/*
* agregar comentarios seccion movie
*/
	$("#ad-comment").click(function() {
		var comments = $("#comment-box").val();
		$("#new-comment").append("<div id='new-commentbox' class='media'>" +
			"<a class='pull-left' href='#'><img class= img-responsive width='50px' height='50px' src='https://i.ytimg.com/vi/DxOmh658_eE/hqdefault.jpg' alt = ''></a>" +
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
	})
/*
* click en #signin vista con login
*/
	$("#signin").click(function() {
		$(".first-time").hide();
		$(".login-register").hide();
		$(".search-container").hide();
		$(".vista-movie").hide();
		$(".profile-container").hide();
		$(".vista-newsfeed").show();
		$(".show-on-login").show();
		$(".section-white").show();
		$(".profile-access").html("<img src='"+ user.image + "' alt='profile-photo'>");
		$(".logo").click(function(){
			$(".first-time").hide();
			$(".login-register").hide();
			$(".search-container").hide();
			$(".vista-movie").hide();
			$(".profile-container").hide();
			$(".vista-newsfeed").show();
			$(".show-on-login").show();
			$(".section-white").show();
		})
		/*
		* accediendo al perfil
		*/
		$(".profile-access").click(function(){
			$(".profile-picture-container").empty();
			$(".profile-picture-container").append("<img src='"+ user.image + "' alt='Profile Photo'>");
			$(".favorites-container").empty();
			$(".see-later-container").empty();
			$(".have-seen-container").empty();
			for(var i = 0; i < user["favorites"].length; i++){
				generateList(".favorites-container", user.favorites[i]);
			}
			for(var i = 0; i < user["seeLater"].length; i++){
				generateList(".see-later-container", user.seeLater[i]);
			}
			for(var i = 0; i < user["haveSeen"].length; i++){
				generateList(".have-seen-container", user.haveSeen[i]);
			}
			$(".profile-info").empty();
			var html = "<p><span class='bold'>Name: </span>" + user.name + "</p>" +
									"<p><span class='bold'>Alias: </span>" + user.alias + "</p>" +
									"<p><span class='bold'>Age: </span>" + user.age + "</p>" +
									"<p><span class='bold'>Location: </span>" + user.location + "</p>";
			$(".profile-info").append(html);
			$(".first-time").hide();
			$(".login-register").hide();
			$(".search-container").hide();
			$(".vista-movie").hide();
			$(".profile-container").show();
			$(".vista-newsfeed").hide();
			$(".section-white").hide();
		})
	})
/*
* vista sin login
*/
$(".go-out").click(function(){
	$(".favorites-container").empty();
	$(".see-later-container").empty();
	$(".have-seen-container").empty();
	$(".section-white").show();
	$(".search-container").hide();
	$(".vista-movie").hide();
	$(".profile-container").hide();
	$(".vista-newsfeed").hide();
	$(".show-on-login").hide();
	$(".first-time").show();
	$(".login-register").show();
	$(".logo").click(function(){
		$(".search-container").hide();
		$(".vista-movie").hide();
		$(".profile-container").hide();
		$(".vista-newsfeed").hide();
		$(".show-on-login").hide();
		$(".first-time").show();
		$(".login-register").show();
	})
})
/*
* función para películas en perfil
*/
var generateList = function(container, code){
	var link = "https://www.omdbapi.com/?apikey=3a181f1c&i=" + code;
	$.getJSON(link).then(function(response){
		console.log(response)
		var poster = response.Poster;
		var title = response.Title;
			$(container).append("<div class='col-xs-6 col-md-3'>"+
											"<a href='' class='thumbnail more'>"+
												"<span class='code'>" + code + "</span>"+
												"<img src='"+ poster + "' alt=''>" +
												"<p class='text-center mini-title'>"+ title + "</p>" +
											"</a>"+
										"</div>");
	})
}
	/*
	* función para generar contenido html por película
	*/
	var generateInfo = function(code){
		var link = "https://www.omdbapi.com/?apikey=3a181f1c&i=" + code;
		$.getJSON(link).then(function(response){
			/*
			* comprobar que 'movie' sea de género sci-fi
			*/
			if(response.Response == "True" && response.Genre.indexOf("Sci-Fi") !== -1 && response.Type == "movie"){
				var title = response.Title;
				var year = response.Year;
				var director = response.Director;
				var plot = response.Plot;
				var poster = response.Poster;
				var actors = response.Actors
				var imdbID = response.imdbID
				var heart = "";
				var check = "";
				var garbage ="";
				var seeLater = "";
				if (user["favorites"].indexOf(code) !== -1){
					heart = "<li class='heart'><i class='fas fa-heart fa-2x'></i></li>";
				}else{
					heart = "<li class='heart not-active'><i class='far fa-heart fa-2x'></i></li>";
				}
				if (user["garbage"].indexOf(code) !== -1){
					garbage = "<li class='garbage'><i class='fas fa-trash-alt fa-2x'></i></li>";
				}else{
					garbage = "<li class='garbage not-active'><i class='far fa-trash-alt fa-2x'></i></li>";
				}
				if (user["haveSeen"].indexOf(code) !== -1){
					check = "<li class='check'><i class='fas fa-check-circle fa-2x'></i></li>";
				}else{
					check = "<li class='check not-active'><i class='far fa-check-circle fa-2x'></i></li>";
				}
				if (user["seeLater"].indexOf(code) !== -1){
					seeLater = "<li class='see-later'><i class='fas fa-clock fa-2x'></i></li>";
				}else{
					seeLater = "<li class='see-later not-active'><i class='far fa-clock fa-2x'></i></li>";
				}
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
								heart +
								garbage +
								seeLater +
								check +
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
	* función para recorrer los resultados de la búsqueda
	*/
	var generateResults = function(movieInput){
		var link = "https://www.omdbapi.com/?apikey=3a181f1c&s=" + movieInput + "&plot=short";
		$.getJSON(link).then(function(response){
			console.log(response);
			var movie = response.Search;
			/*
			* cuando "response" es un string false, es porque la búsqueda no arrojó resultados
			*
			*/
			if (response.Response == "False") {
				$(".movie-not-found").show();
			}else {
				for(var i = 0; i < movie.length; i++){
					generateInfo(movie[i].imdbID);
				}
			}
		})
		/*
		* interacción con el contenido generado e insertado anteriormente
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
				generateOneMovieInfo(code);
			})
			/*
			* interacción con los íconos heart, garbage, see-later y check
			*/
			$(".heart").click(function(){
				if($(this).hasClass("not-active")){
					$(this).removeClass("not-active");
					/*
					* qué hacer con la película en caso de que le demos click al corazón vacío
					* sumamos esta película a la info del usuario
					* recordatorio: agregar un filtrado al a hora de generar contenido, si la película
					* está en el array de favoritos, que el corazón esté lleno
					*/
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					user["favorites"].push($(code).text());
					console.log(user["favorites"]);
				}else{
					$(this).addClass("not-active");
					/*
					*qué hacer con la película en caso de que le demos click al corazón lleno
					*/
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					var index = user["favorites"].indexOf(code);
					user["favorites"].splice(index, 1);
					console.log(user["favorites"]);
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
					/*
					*qué hacer con la película en caso de que le demos click al garbage vacío
					*/
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					user["garbage"].push($(code).text());
				}else{
					$(this).addClass("not-active");
					/*
					* qué hacer con la película en caso de que le demos click al garbage lleno
					*/
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					var index = user["garbage"].indexOf(code);
					user["garbage"].splice(index, 1);
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
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					user["seeLater"].push($(code).text());
				}else{
					$(this).addClass("not-active");
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					var index = user["seeLater"].indexOf(code);
					user["seeLater"].splice(index, 1);
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
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					user["haveSeen"].push($(code).text());
				}else{
					$(this).addClass("not-active");
					var div = $(this).parents()[0];
					div = $(div).parents()[1];
					var code = $(div).children()[0];
					var index = user["haveSeen"].indexOf(code);
					user["haveSeen"].splice(index, 1);
				}

				if($(this).hasClass("not-active")){
					$(this).html("<i class='far fa-check-circle fa-2x'></i>");
				}else{
					$(this).html("<i class='fas fa-check-circle fa-2x'></i>");
				}
			})
		}, 2000);
	}
	/*
	* función de click al btn enter BÚSQUEDA
	*/
	$(".btn-search").click(function onClick(){
		$(".first-time").hide();
		$(".section-white").hide();
		$(".movie-not-found").hide();
		$(".vista-newsfeed").hide();
		$(".vista-movie").hide();
		$(".profile-container").hide();
		$(".search-container").show();
		$(".movies-container").show();

		if($(".movie-input").val().length == 0){
			
		}
		var movie = $(".movie-input").val();
		$(".movies-container").empty();
		generateResults(movie);
		$(".movie-input").val("");
	})
	/*
	* función para generar info de una película
	*/
	var generateOneMovieInfo = function(code){
		var link = "https://www.omdbapi.com/?apikey=3a181f1c&i=" + code + "&plot=full";
		$.getJSON(link).then(function(response){
			console.log(response);
			var title = response.Title;
			var year = response.Year;
			var director = response.Director;
			var plot = response.Plot;
			var poster = response.Poster;
			var actors = response.Actors
			var runTime = response.Runtime;
			var imdbID = response.imdbID;
			var language = response.Language;
			var value = response.Ratings[0].Value;
			var production = response.Production;
			var heart = "";
			var garbage = "";
			var check = "";
			var seeLater = "";
			if (user["favorites"].indexOf(code) !== -1){
				heart = "<li class='heart-2'><i class='fas fa-heart'></i></li>";
			}else{
				heart = "<li class='heart-2 not-active'><i class='far fa-heart'></i></li>";
			}
			if (user["garbage"].indexOf(code) !== -1){
				garbage = "<li class='garbage-2'><i class='fas fa-trash-alt'></i></li>";
			}else{
				garbage = "<li class='garbage-2 not-active'><i class='far fa-trash-alt'></i></li>";
			}
			if (user["haveSeen"].indexOf(code) !== -1){
				check = "<li class='check-2'><i class='fas fa-check-circle'></i></li>";
			}else{
				check = "<li class='check-2 not-active'><i class='far fa-check-circle'></i></li>";
			}
			if (user["seeLater"].indexOf(code) !== -1){
				seeLater = "<li class='see-later-2'><i class='fas fa-clock'></i></li>";
			}else{
				seeLater = "<li class='see-later-2 not-active'><i class='far fa-clock'></i></li>";
			}
			$(".movie-icons").empty();
			$(".movie-icons").append(heart + garbage + seeLater + check);
			/*
			* insertando datos en el contenido html
			*/
			$(".movie-profile").html("<img id='img-profile' class='img-thumbnail img-center img-rounded' src='" + poster + "'>")
			var html =	"<span class='code'>"+ imdbID + "</span>" +
					      	"<h4 class='title'>"+ title + "</h4>" +
					      	"<span class='main'><span class='bold'>Director: </span><span class='director'>"+ director + "</span></span>" +
					      	"<span class='main'>" +
					      		"<span class='bold'>Value: </span><span class='year'>"+ value + " <a href='http://www.imdb.com/' title='Internet Movie Database' target='_blank'>(IMDb)</a></span>" +
					      	"</span>"+
					      	"<span class='main'>"+
					      		"<span class='bold'>Production: </span><span class='production'>" + production + "</span>"+
					      	"</span>" +
					      	"<span class='main'>" +
					      		"<span class='bold'>Year: </span><span class='year'>"+ year + "</span>"+
					      	"</span>"+
					      	"<span class='main'>"+
					      		"<span class='bold'>RunTime: </span><span class='runtime'>"+ runTime + "</span>"+
					      	"</span>" +
					      	"<span class='main'>" +
					      		"<span class='bold'>Language: </span><span class='year'>" + language + "</span>" +
					      	"</span>"+
					      	"<span class='main'>" +
					      		"<span class='bold'>Cast: </span><span class='actors'>" + actors + "</span>"+
					      	"</span>"+
					      	"<hr>"+
					      	"<p class='long-plot'><span class='bold'>Plot: </span>" + plot + "</p>"+
					      	"<hr>";
			console.log(title);
			setTimeout(function() {
						/*
						* interacción con los íconos heart, garbage, see-later y check
						*/
						$(".heart-2").click(function(){
							if($(this).hasClass("not-active")){
								$(this).removeClass("not-active");
								var div = $(this).parents()[2];
								div = $(div).children()[1];
								var code = $(div).children()[0];
								console.log(div);
								user["favorites"].push($(code).text());
								console.log(user["favorites"]);
							}else{
								$(this).addClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								var index = user["favorites"].indexOf(code);
								user["favorites"].splice(index, 1);
								console.log(user["favorites"]);
							}

							if($(this).hasClass("not-active")){
								$(this).html("<i class='far fa-heart'></i>");
							}else{
								$(this).html("<i class='fas fa-heart'></i>");
							}
						})

						$(".garbage-2").click(function(){
							if($(this).hasClass("not-active")){
								$(this).removeClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								user["garbage"].push($(code).text());
							}else{
								$(this).addClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								var index = user["garbage"].indexOf(code);
								user["garbage"].splice(index, 1);
							}
							if($(this).hasClass("not-active")){
								$(this).html("<i class='far fa-trash-alt'>");
							}else{
								$(this).html("<i class='fas fa-trash-alt'>");
							}
						})

						$(".see-later-2").click(function(){
							if($(this).hasClass("not-active")){
								$(this).removeClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								user["seeLater"].push($(code).text());
							}else{
								$(this).addClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								var index = user["seeLater"].indexOf(code);
								user["seeLater"].splice(index, 1);
							}

							if($(this).hasClass("not-active")){
								$(this).html("<i class='far fa-clock'></i>");
							}else{
								$(this).html("<i class='fas fa-clock'>");
							}
						})

						$(".check-2").click(function(){
							if($(this).hasClass("not-active")){
								$(this).removeClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								user["haveSeen"].push($(code).text());
							}else{
								$(this).addClass("not-active");
								var div = $(this).parents()[0];
								div = $(div).parents()[1];
								var code = $(div).children()[0];
								var index = user["haveSeen"].indexOf(code);
								user["haveSeen"].splice(index, 1);
							}

							if($(this).hasClass("not-active")){
								$(this).html("<i class='far fa-check-circle'></i>");
							}else{
								$(this).html("<i class='fas fa-check-circle'></i>");
							}
						})
					}, 2000);
			$(".info-container").empty();
			$(".info-container").append(html);
			$(".search-container").hide();
			$(".vista-movie").show();
		})
	}
})