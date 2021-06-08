// Close Modal khi ấn ra ngoài modal
$(window).click(function(e) {
        if ($(e.target).is(".modal-show")) {
            $('.modal-show').toggleClass('show');
            $('.modal').toggleClass('fade-in');
        }
    })
    // close modal Khi ấn vào nút " Hủy "
$('.close').click(function() {
    $('.modal-show').toggleClass('show');
    $('.modal').toggleClass('fade-in');
})

// Function xóa dữ liệu khi ấn nút "đồng ý" ở modal
$('.accept').click(function() {
    //xóa thông tin user trên file database, dựa theo ID đã lấy khi click vào nút Xóa
    $.ajax({
        url: `https://list-techmaster123.herokuapp.com/users/${userID}`,
        type: 'DELETE',
    }).done(function() {
        // xóa div chứa thông tin user trên HTML 
        $('.info-list').eq(index).remove();
    }).fail(function() {
        alert("Có lỗi xảy ra, không thể xóa dữ liệu.")
    });


    $('.modal-show').toggleClass('show');
    $('.modal').toggleClass('fade-in');
})