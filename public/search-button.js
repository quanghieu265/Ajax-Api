// //Tạo sự kiện cho nút Tìm Kiếm, lấy giá trị từ ô input và sửa lại html theo giá trị đó
$(".search-button").click(function() {
    let inputValue = $("#name-student").val();
    if (inputValue === "") {
        alert("Vui Lòng Nhập Tên Học Viên");
    } else {
        let x = 0;
        for (i = 0; i < userObj.length; i++) {
            //Kiểm tra giá trị ở ô input với các giá trị trong object.name
            if (userObj[i].name.toLowerCase().includes(inputValue.toLowerCase())) {
                if (x == 0) {
                    rebuildHtml();
                } else {
                    $(".info-list:first").clone().appendTo(".student-list");
                }
                userObj[i].name == "" ? $(".name").eq(x).text("chưa biết") : $(".name").eq(x).text(userObj[i].name);
                userObj[i].birthday == "" ? $(".birth").eq(x).text("chưa biết") : $(".birth").eq(x).text(userObj[i].birthday);
                userObj[i].email == "" ? $(".email").eq(x).text("chưa biết") : $(".email").eq(x).text(userObj[i].email);
                userObj[i].phone == "" ? $(".number").eq(x).text("chưa biết") : $(".number").eq(x).text(userObj[i].phone);
                $(`.edit:eq(${x})`).attr("href", `./edit-form.html?id=${userObj[i].id}`);
                $(`.remove:eq(${x})`).attr("data-id", `${userObj[i].id}`);
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