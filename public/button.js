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
    $.ajax({
        url: `http://localhost:3000/users/${userID}`,
        type: 'DELETE',
    });
    $('.info-list').eq(index).remove();
    $('.modal-show').toggleClass('show');
    $('.modal').toggleClass('fade-in');
})