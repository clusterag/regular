//Copyright 2013 Jonathan Eberle aka johnee(dot)eu as part of a project for Cluster-AG of 
//Leininger-Gymnasium (clusterag (dot) leiningergymnasium (dot) de)
//All Rights Reserved until proper licensing is in place
//Special credit to http://stackoverflow(dot)com/users/192705/ben

$(document).ready(function() {
    $('#topscroll').click(function() {
        $('body,html').animate({scrollTop:$('#top').offset().top},500);
    });
});