var xmlhttp = new XMLHttpRequest(); // tạo 1 biến chứa cái xml request để lấy data từ sever

//Xác định một hàm được gọi khi thuộc tính readyState thay đổi 
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for (i = 0; i < myObj.users.length; i++) {
            // <!-- $('.cloneitem:first').clone().appendTo('#container'); -->
            // <!-- Mỗi vằng lặp i sẽ clone lại rồi fill giá trị -->
            document.getElementsByClassName("name")[i].innerHTML = myObj.users[i].name;
            document.getElementsByClassName("birth")[i].innerHTML = myObj.users[i].birthday;
            document.getElementsByClassName("email")[i].innerHTML = myObj.users[i].email;
            document.getElementsByClassName("number")[i].innerHTML = myObj.users[i].phone;

            if (i < myObj.users.length - 1) {
                $(".info-list:first").clone().appendTo(".student-list");
            }
        }

        $('.remove').click(function() {
            $('.modal-show').toggleClass('show');
            $('.modal').toggleClass('fade-in');
            index = $('.remove').index(this)
        })
    }
};
//Bắt đầu lấy dữ liệu từ sever
xmlhttp.open("GET", "http://localhost:3000/users", true);
xmlhttp.send();