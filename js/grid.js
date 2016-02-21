$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
    var div = $('.grid-item');
    var width = div.width();
    
    div.css('height', width);
    $('.footer').css('height', width);
    $('.skewed').css('margin-top', -(width/1.5));
}

