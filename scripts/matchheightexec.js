

(function() {

                /* matchHeight */

                $(function() {
                    // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)
                    var byRow = "true";

                    // apply matchHeight to each item container's items
                    $('.matchheight').each(function() {
                        $(this).children('.item').matchHeight(byRow);
                    });

                   ;

                });

            })();