$(document).ready(function() {
	$.getJSON("./json/countries.json",function(data) { //insert dynamic data from json
		var currentCountry = data.countries[window.location.search.match(/\d+/)-1];
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
							"</section>"+
							"<section id='people_section'>"+
							"</section>"			
			);
			
			var projectsListLength = currentCountry.projectsList.length;
			for (var i=0 ; i<projectsListLength ; i++) {
				var currentProjectImageUrl = currentCountry.projectsList[i].projectImageUrl;
				$("#projects_list_country").append("<section class='event_section_country'>"+
														"<img src="+currentProjectImageUrl+" id='event_img0'>"+
														"<section class='event_text'>"+
															"<p class='event_name'>"+
																currentCountry.projectsList[i].projectName+
															"</p>"+
															"<p class='event_date'>"+
																currentCountry.projectsList[i].projectDate+
															"</p><br>"+
															"<p class='event_data'>"+
																currentCountry.projectsList[i].projectInfo+
															"</p>"+
														"</section>");					
			}
			
			$("#people_section").append("<h1 id='projectList_country_h1'>The M.B.F CORE LEADERSHIP</h1>"+
										"<section class='initiator'>"+
											"<img class='people_country1'>"+
											"<p class='people_name'>INITIATOR<br>Michal Federman</p>"+
											"<p class='people_info'>This great increase in demand yet again shows the great desire that exists among young Jewish adults to learn</p>"+
											"<a href='index.html'>Read More</a>"+
										"</section>"+
										"<section class='initiator'>"+
											"<img class='people_country2'>"+
											"<p class='people_name'>MENTOR<br>Hadar Tamar</p>"+
											"<p class='people_info'>This great increase in demand yet again shows the great desire that exists among young Jewish adults to learn</p>"+
											"<a href='index.html'>Read More</a>"+
										"</section>"+
										"<section class='initiator'>"+
											"<img class='people_country3'>"+
											"<p class='people_name'>ORGANIZER<br>Ofer Miranda</p>"+
											"<p class='people_info'>This great increase in demand yet again shows the great desire that exists among young Jewish adults to learn</p>"+
											"<a href='index.html'>Read More</a>"+
										"</section>"
								
								
								
										);
			$("#left_menu").css("height",function(){alert($("main").innerHeight());return ($("main").innerHeight());});	
								
	});
	

	
	
});