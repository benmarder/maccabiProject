$(document).ready(function() {
	$.getJSON("./json/countries.json",function(data) { //insert dynamic data from json
		var currentCountry = data.countries[window.location.search.match(/\d+/)-1];
		//var currentFlagUrl = data.countries[currentCountry].flagUrl;
			$("main").append("<h1 id='country_h1'>"+currentCountry.home+" PAGE</h1>"+
							"<section id='main_img_country_section'>"+
								"<p id='main_country_wellcome'>Welcome to Tafnit Program's 2012</p>"+
								"<img src='images/country_azrieli.jpg' id='country_main_image'>"+
								"<section id='four_element_country'>"+
									"<img src='images/congress.jpg' id='upper_left'>"+
									"<section id='upper_right'>"+
										"<h2 class='h2_four_element'>Welcome to<br> Tafnit Program's 2011</h2>"+
										"<p id='four_element_info'>"+
											"worldwide community of Jewish professionals, business leaders and executives who have a strong desire<br>to connect and executives who have<br>a strong to connect and executives<br>"+
										"</p>"+ 
									"</section>"+
									"<section id='lower_left'>"+
										"<h2 class='h2_four_element'>Welcome to<br> Tafnit Program's 2011</h2>"+
										"<p id='four_element_info'>"+
											"worldwide community of Jewish professionals, business leaders and executives who have a strong desire to connect and executives who have a strong to connect and executives"+
										"</p>"+ 
									"</section>"+
									"<img src='images/azrieli_evening.jpg' id='lower_right'>"+
								"</section>"+
							"</section>"+
							"<section id='info_with_flag'>"+
								"<img src="+currentCountry.flagUrl+" id='country_flag'>"+
								"<p id='country_description'>"+currentCountry.description+"</p>"+
							"</section>"+
							"<div class='clear'></div>"+
							"<section id='projects_list_country'>"+
								"<h1 id='projectList_country_h1'>PROJECTS LIST</h1>"+
							"</section>"			
			);
							
	});
	$.getJSON("./json/events.json",function(data) { //insert dynamic data from json
		var currentImgId;
		for (var i=0 ; i<=3 ; i++) {
			currentImgId = "event_img"+i;
			$("main").append("<section class='event_section'>"+
								"<section id="+currentImgId+"></section>"+
								"<section class='event_text'>"+
									"<p class='event_name'>"+
										data.events[i].eventName+
									"</p>"+
									"<p class='event_date'>"
										+data.events[i].eventDate+
									"</p><br>"+
									"<p class='event_data'>"
										+data.events[i].eventDescription+
									"</p>"+
								"</section>"+
							"</section>"

							
							);
		}
	});
	$("main").append("<section id='people_section'>red section</section>"	
	
					);
	
});