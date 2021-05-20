$(window).click(function(e) {
    if ($(e.target).is(".modal-show")) {
        $('.modal-show').toggleClass('show');
        $('.modal').toggleClass('fade-in');
    }
})
$('.close').click(function() {
    $('.modal-show').toggleClass('show');
    $('.modal').toggleClass('fade-in');
})
$('.accept').click(function() {
    $('.info-list').eq(index).remove();
    $('.modal-show').toggleClass('show');
    $('.modal').toggleClass('fade-in');
})