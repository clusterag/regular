//This file is part of regular.
//regular is Copyright 2013 Jonathan Eberle & Cluster-AG Leinger-Gymnasium Grünstadt regular is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//regular is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//You should have received a copy of the GNU General Public License along with regular. See the file LICENSE. If not, see http://www.gnu.org/licenses/.
//Special credit to http://stackoverflow(dot)com/users/192705/ben

$(document).ready(function() {
    $('#topscroll').click(function() {
        $('body,html').animate({scrollTop:$('#top').offset().top},500);
    });
});