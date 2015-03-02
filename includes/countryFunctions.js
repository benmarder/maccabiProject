$(document).ready(function() {
    $.getJSON("./json/countries.json", function(data) { //insert dynamic data from json
        var currentCountry = data.countries[window.location.search.match(/\d+/) - 1];
        $("main").append("<h1 id='country_h1'>" + currentCountry.home + " PAGE</h1>" +
            "<section id='main_img_country_section'>" +
            "<p id='main_country_wellcome'>" + data.content.headLine1 + "</p>" +
            "<img src=" + data.content.pic1 + "id='country_main_image'>" +
            "<section id='four_element_country'>" +
            "<img src=" + data.content.pic2 + "id='upper_left'>" +
            "<section id='upper_right'>" +
            "<h2 class='h2_four_element'>" + data.content.headLine2 + "</h2>" +
            "<p id='four_element_info'>" + data.content.paragraph + "</p>" +
            "</section>" +
            "<section id='lower_left'>" +
            "<h2 class='h2_four_element'>" + data.content.headLine2 + "</h2>" +
            "<p id='four_element_info'>" +
            data.content.paragraph + "</p>" +
            "</section>" +
            "<img src=" + data.content.pic3 + "id='lower_right'>" +
            "</section>" +
            "</section>" +
            "<section id='info_with_flag'>" +
            "<img src=" + currentCountry.flagUrl + " id='country_flag'>" +
            "<p id='country_description'>" + currentCountry.description + "</p>" +
            "</section>" +
            "<div class='clear'></div>" +
            "<section id='projects_list_country'>" +
            "<h1 id='projectList_country_h1'>" + data.content.headLine3 + "</h1>" +
            "</section>" +
            "<section id='people_section'>" +
            "</section>"
        );

        var projectsListLength = currentCountry.projectsList.length,
            personsLength = currentCountry.person.length;
        for (var i = 0; i < projectsListLength; i++) {
            var currentProjectImageUrl = currentCountry.projectsList[i].projectImageUrl;
            $("#projects_list_country").append("<section id='events_country'>" +
                "<img src=" + currentProjectImageUrl + " id='event_img0'>" +
                "<h2>" +
                currentCountry.projectsList[i].projectName +
                "</h2>" +
                "<h3>" +
                currentCountry.projectsList[i].projectDate +
                "<h3><br>" +
                "<p>" +
                currentCountry.projectsList[i].projectInfo +
                "</p>" +
                "</section>");
        }

        $("#people_section").append("<h1 id='projectList_country_h1'>The M.B.F CORE LEADERSHIP</h1>");
        for (var i = 0; i < personsLength; ++i) {
            $("#people_section").append("<section class='initiator'>" +
                "<img src=" + currentCountry.person[i].pic + ">" +
                "<p class='people_name'>" + currentCountry.person[i].name + "</p>" +
                "<p class='people_info'>" + currentCountry.person[i].info + "</p>" +
                "<a href='index.html'>Read More</a>" +
                "</section>"
            );
        }
        $("#left_menu").css("height", function() {
            return ($("main").innerHeight());
        });

    });




});