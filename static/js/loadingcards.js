$(document).ready(function() {
    var skills = {
        ht: 75,
        jq: 25,
        sk: 90,
        ph: 75,
        il: 90,
        in: 85,
        fl: 75
    };

    $.each(skills, function(key, value) {
        var skillbar = $("." + key);

        skillbar.animate({
                width: value + "%"
            },
            3000,
            function() {
                $(".speech-bubble").fadeIn();
            }
        );
    });
});