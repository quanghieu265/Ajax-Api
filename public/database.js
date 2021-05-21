let xmlhttp = new XMLHttpRequest(); // tạo 1 biến chứa cái xml request để lấy data từ sever
let myObj;
let userID;
//Xác định một hàm được gọi khi thuộc tính readyState thay đổi 
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (i = 0; i < myObj.users.length; i++) {
            // <!-- $('.cloneitem:first').clone().appendTo('#container'); -->
            // <!-- Mỗi vằng lặp i sẽ clone lại rồi fill giá trị -->

            document.getElementsByClassName("name")[i].innerHTML = myObj.users[i].name;

            if (myObj.users[i].birthday == "") {
                document.getElementsByClassName("birth")[i].innerHTML = "chưa biết";
            } else { document.getElementsByClassName("birth")[i].innerHTML = myObj.users[i].birthday; }
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
            nameFinder = $('.name').eq(index).html()
            for (i = 0; i < myObj.users.length; i++) {
                if (nameFinder === myObj.users[i].name) {
                    userID = myObj.users[i].id;
                }
            }
        })
        $(".edit").click(function() {

            index = $('.edit').index(this)
            nameFinder = $('.name').eq(index).html()
            for (i = 0; i < myObj.users.length; i++) {
                if (nameFinder === myObj.users[i].name) {
                    userID = myObj.users[i].id;
                }
            }
            $.ajax({
                type: "PUT",
                url: "http://localhost:3000/userIndex/1",
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
xmlhttp.open("GET", "http://localhost:3000/db", true);
xmlhttp.send();