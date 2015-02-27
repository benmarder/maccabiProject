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
								"<section>"+
									"<h2>"+
										data.events[i].eventName+
									"</h2>"+
									"<h3>&nbsp"
										+data.events[i].eventDate+
									"</h3><br>"+
									"<p>"
										+data.events[i].eventDescription+
									"</p>"+
								"</section>"+
							"</section>");

		}
	});
	
});