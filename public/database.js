let xmlhttp = new XMLHttpRequest; // tạo 1 biến chứa cái xml request để lấy data từ sever
let myObj;
let userID;
//Xác định một hàm được gọi khi thuộc tính readyState thay đổi 
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (i = 0; i < myObj.users.length; i++) {
            // <!-- $('.cloneitem:first').clone().appendTo('#container'); -->
            // <!-- Mỗi vằng lặp i sẽ clone lại rồi fill giá trị -->
            myObj.users[i].name == "" ? document.getElementsByClassName("name")[i].innerHTML = "chưa biết" : document.getElementsByClassName("name")[i].innerHTML = myObj.users[i].name
            myObj.users[i].birthday == "" ? document.getElementsByClassName("birth")[i].innerHTML = "chưa biết" : document.getElementsByClassName("birth")[i].innerHTML = myObj.users[i].birthday
            myObj.users[i].email == "" ? document.getElementsByClassName("email")[i].innerHTML = "chưa biết" : document.getElementsByClassName("email")[i].innerHTML = myObj.users[i].email
            myObj.users[i].phone == "" ? document.getElementsByClassName("number")[i].innerHTML = "chưa biết" : document.getElementsByClassName("number")[i].innerHTML = myObj.users[i].phone

            // điều kiện để không clone ở cuôi vòng lặp
            if (i < myObj.users.length - 1) {
                $(".info-list:first").clone().appendTo(".student-list");
            }
        }
        $('.remove').click(function() {
            $('.modal-show').toggleClass('show');
            $('.modal').toggleClass('fade-in');
            // Tìm số ID của User khi click vào nút Xóa, bằng cách tìm theo tên User
            index = $('.remove').index(this)
            nameFinder = $('.name').eq(index).html()
            for (i = 0; i < myObj.users.length; i++) {
                if (nameFinder === myObj.users[i].name) {
                    userID = myObj.users[i].id;
                }
            }
        })
        $(".edit").click(function() {
            // Tìm số ID của User khi click vào nút Chỉnh Sửa, bằng cách tìm theo tên User
            index = $('.edit').index(this)
            nameFinder = $('.name').eq(index).html()
            for (i = 0; i < myObj.users.length; i++) {
                if (nameFinder === myObj.users[i].name) {
                    userID = myObj.users[i].id;
                }
            }
            // Đưa số ID vào file userIdStorage trong database để sử dụng ở các file HTML khác
            $.ajax({
                type: "PUT",
                url: "https://list-techmaster123.herokuapp.com/userIdStorage/1",
                data: ` {
                    "UI":${userID}
                   }`,
                contentType: "application/json",
                dataType: 'json'
            });
        })
    }
};
//Bắt đầu lấy dữ liệu từ sever
xmlhttp.open("GET", "https://list-techmaster123.herokuapp.com/db", true);
xmlhttp.send();