$(function () {
    
    $('.dazed__info').first().addClass('active');
    
    
    $('.dazed__item').click(function () {
        $('.dazed__item').removeClass('color');
        $(this).addClass('color');
        $('.dazed__info').removeClass('active');
        $(this).next().addClass('active');
        
    });
    
});