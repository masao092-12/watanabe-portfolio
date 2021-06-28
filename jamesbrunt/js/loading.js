$('head').append(
    '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'
);

$.event.add(window,"load",function() { 
    var pageH = $("#container").height();
    $("#fade").css("height", pageH).delay(2500).fadeOut(2400);
    $('#loeder').animate({'scrollTop':'0'},500);
    $("#loader").delay(3000).fadeOut(1000);
    $("#container").css("display", "block");
});
