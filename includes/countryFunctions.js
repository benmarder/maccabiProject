$(document).ready(function() {
	var currentId = function getUrlParameter(sParam) {
    	var sPageURL = window.location.search.substring(1);
    	var sURLVariables = sPageURL.split('&');
    	for (var i = 0; i < sURLVariables.length; i++) {
        	var sParameterName = sURLVariables[i].split('=');
        	if (sParameterName[0] == sParam) {
        	   	return sParameterName[1];
        	}
    	}
	};
	$.getJSON("./json/countries.json",function(data) { //insert dynamic data from json
		var currentCountry = data.countries[currentId("id")-1];
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
											"worldwide community of Jewish professionals, business leaders and executives who have a strong desire to connect and executives who have a strong to connect and executives"+
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
							"</section>" );
	});
	
});
