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

// Tạo sự kiện khi giá trị của ô selected thay đổi
// Và sửa lại html theo giá trị đó
$("#soft").change(changeValue)

function changeValue() {
    $(".info-list").not(".info-list:eq(0)").remove();
    if ($("#soft").val() === "old") {
        $.ajax({
            type: "GET",
            url: "https://list-techmaster123.herokuapp.com/users"
        }).done(getData);
    } else {
        $.ajax({
            type: "GET",
            url: "https://list-techmaster123.herokuapp.com/users" + "?_sort=id&_order=desc"
        }).done(getData);
    }
}

// //Tạo sự kiện cho nút Tìm Kiếm, lấy giá trị từ ô input và sửa lại html theo giá trị đó
$(".search-button").click(function() {
    let inputValue = $("#name-student").val();
    if (inputValue === "") {
        alert("Vui Lòng Nhập Tên Học Viên");
    } else {
        let x = 0;
        for (i = 0; i < myObj.length; i++) {
            //Kiểm tra giá trị ở ô input với các giá trị trong object.name
            if (myObj[i].name.toLowerCase().includes(inputValue.toLowerCase())) {
                if (x == 0) {
                    $(".info-list").not(".info-list:eq(0)").remove();
                } else {
                    $(".info-list:first").clone().appendTo(".student-list");
                }
                myObj[i].name == "" ? $(".name").eq(x).text("chưa biết") : $(".name").eq(x).text(myObj[i].name);
                myObj[i].birthday == "" ? $(".birth").eq(x).text("chưa biết") : $(".birth").eq(x).text(myObj[i].birthday);
                myObj[i].email == "" ? $(".email").eq(x).text("chưa biết") : $(".email").eq(x).text(myObj[i].email);
                myObj[i].phone == "" ? $(".number").eq(x).text("chưa biết") : $(".number").eq(x).text(myObj[i].phone);
                $(`.edit:eq(${x})`).attr("href", `./edit-form.html?id=${myObj[i].id}`);
                $(`.remove:eq(${x})`).attr("data-id", `${myObj[i].id}`);
                x++;
            }
        }
        if (x === 0) {
            alert("Không Tìm Thấy Học Viên")
            changeValue();
        }
    }
})

//Lấy lại giữ liệu khi để trống ô input
$("#name-student").change(function() {
    if ($("#name-student").val() == "") {
        changeValue();
    }
})