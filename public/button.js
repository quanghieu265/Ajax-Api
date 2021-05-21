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
    //xóa thông tin user trên file database, dựa theo ID đã lấy khi click vào nút Xóa
    $.ajax({
        url: `https://list-techmaster123.herokuapp.com/users/${userID}`,
        type: 'DELETE',
    });
    // xóa div chứa thông tin user trên HTML 
    $('.info-list').eq(index).remove();
    $('.modal-show').toggleClass('show');
    $('.modal').toggleClass('fade-in');
})