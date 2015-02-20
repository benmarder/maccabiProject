$(document).ready(function() {
	$("#events").css('background-color','#f7931e'); //change button color
	$("#current_page").css('font-weight','bold'); //change current page to bold
	$.getJSON("./json/events.json",function(data) { //insert dynamic data from json
		var jsonLength = data.events.length;
		var currentImgId;
		for (var i=0 ; i<jsonLength ; i++) {
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
							"</section>");

		}
	});
	
});