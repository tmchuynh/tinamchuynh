"use strict";

var projectCards;
var isMobile = false,
    isTablet = false,
    isLaptop = false;
(function($) {
    jQuery(document).ready(function() {
        function detectDevice() {
            if (window.innerWidth <= 425) {
                isMobile = true;
                isTablet = false;
                isLaptop = false;
            } else if (window.innerWidth <= 768) {
                isMobile = false;
                isTablet = true;
                isLaptop = false;
            } else {
                isMobile = false;
                isTablet = false;
                isLaptop = true;
            }
        }
        detectDevice();

    });
})(jQuery);