let myObj;
let userID;
// let xmlhttp = new XMLHttpRequest; // tạo 1 biến chứa cái xml request để lấy data từ sever
// // Xác định một hàm được gọi khi thuộc tính readyState thay đổi 
// xmlhttp.onreadystatechange = function() {

//     if (this.readyState == 4 && this.status == 200) {
//         myObj = JSON.parse(this.responseText);
//         for (i = 0; i < myObj.length; i++) {
//             // <!-- $('.cloneitem:first').clone().appendTo('#container'); -->
//             // <!-- Mỗi vằng lặp i sẽ clone lại rồi fill giá trị -->
//             myObj[i].name == "" ? document.getElementsByClassName("name")[i].innerHTML = "chưa biết" : document.getElementsByClassName("name")[i].innerHTML = myObj[i].name
//             myObj[i].birthday == "" ? document.getElementsByClassName("birth")[i].innerHTML = "chưa biết" : document.getElementsByClassName("birth")[i].innerHTML = myObj[i].birthday
//             myObj[i].email == "" ? document.getElementsByClassName("email")[i].innerHTML = "chưa biết" : document.getElementsByClassName("email")[i].innerHTML = myObj[i].email
//             myObj[i].phone == "" ? document.getElementsByClassName("number")[i].innerHTML = "chưa biết" : document.getElementsByClassName("number")[i].innerHTML = myObj[i].phone

//             // điều kiện để không clone ở cuôi vòng lặp
//             if (i < myObj.length - 1) {
//                 $(".info-list:first").clone().appendTo(".student-list");
//             }
//         }
//         $('.remove').click(function() {
//             $('.modal-show').toggleClass('show');
//             $('.modal').toggleClass('fade-in');
//             // Tìm số ID của User khi click vào nút Xóa, bằng cách tìm theo tên User
//             index = $('.remove').index(this)
//             nameFinder = $('.name').eq(index).html()
//             for (i = 0; i < myObj.length; i++) {
//                 if (nameFinder === myObj[i].name) {
//                     userID = myObj[i].id;
//                 }
//             }
//         })
//         $(".edit").click(function() {
//             // Tìm số ID của User khi click vào nút Chỉnh Sửa, bằng cách tìm theo tên User
//             index = $('.edit').index(this)
//             nameFinder = $('.name').eq(index).html()
//             for (i = 0; i < myObj.length; i++) {
//                 if (nameFinder === myObj[i].name) {
//                     userID = myObj[i].id;
//                 }
//             }
//             // Đưa số ID vào file userIdStorage trong database để sử dụng ở các file HTML khác
//             $.ajax({
//                 type: "PUT",
//                 url: "https://list-techmaster123.herokuapp.com/userIdStorage/1",
//                 data: ` {
//                     "UI":${userID}
//                    }`,
//                 contentType: "application/json",
//                 dataType: 'json'
//             });
//         })
//     }
// };
// //Bắt đầu lấy dữ liệu từ sever
// xmlhttp.open("GET", "https://list-techmaster123.herokuapp.com/db", true);
// xmlhttp.send();

$.ajax({
    type: "GET",
    url: "https://list-techmaster123.herokuapp.com/users"
}).done(function(responseText) {
    myObj = responseText;
    // Cách 1: dùng jquerry để clone div
    for (i = 0; i < myObj.length; i++) {
        // <!-- $('.cloneitem:first').clone().appendTo('.student-list'); -->
        // <!-- Mỗi vằng lặp i sẽ clone lại rồi fill giá trị -->
        myObj[i].name == "" ? document.getElementsByClassName("name")[i].innerHTML = "chưa biết" : document.getElementsByClassName("name")[i].innerHTML = myObj[i].name
        myObj[i].birthday == "" ? document.getElementsByClassName("birth")[i].innerHTML = "chưa biết" : document.getElementsByClassName("birth")[i].innerHTML = myObj[i].birthday
        myObj[i].email == "" ? document.getElementsByClassName("email")[i].innerHTML = "chưa biết" : document.getElementsByClassName("email")[i].innerHTML = myObj[i].email
        myObj[i].phone == "" ? document.getElementsByClassName("number")[i].innerHTML = "chưa biết" : document.getElementsByClassName("number")[i].innerHTML = myObj[i].phone
        $(`.edit:eq(${i})`).attr("href", `./edit-form.html?id=${myObj[i].id}`);
        $(`.remove:eq(${i})`).attr("data-id", `${myObj[i].id}`);

        // điều kiện để không clone ở cuôi vòng lặp
        if (i < myObj.length - 1) {
            $(".info-list:first").clone().appendTo(".student-list");
        }
    }

    // //Cách 2 : vẽ lại HTML
    // for (let i = 0; i < myObj.length; i++) {
    //     $(".title-list").after(`
    //     <div class="info-list">
    //     <div class="name">${myObj[i].name}</div>
    //     <div class="birth">${myObj[i].birthday}</div>
    //     <div class="email">${myObj[i].email}</div>
    //     <div class="number">${myObj[i].phone}</div>
    //     <div class="button-list">
    //         <a href="./edit-form.html?id=${myObj[i].id}" class="edit"><i class="far fa-edit"></i>Chỉnh sửa</a> |
    //         <button type="button" class="remove" data-id=${myObj[i].id}><i class="fas fa-trash-alt"></i><span>Xóa</span></button>
    //     </div>
    // </div>
    // `)
    // }

    $('.remove').click(function() {
        $('.modal-show').toggleClass('show');
        $('.modal').toggleClass('fade-in');
        userID = $(this).data("id");

    })

    // $(".edit").click(function() {
    //     // Tìm số ID của User khi click vào nút Chỉnh Sửa, bằng cách tìm theo tên User
    //     index = $('.edit').index(this)
    //     nameFinder = $('.name').eq(index).html()
    //     for (i = 0; i < myObj.length; i++) {
    //         if (nameFinder === myObj[i].name) {
    //             userID = myObj[i].id;
    //         }
    //     }
    //     // Đưa số ID vào file userIdStorage trong database để sử dụng ở các file HTML khác
    //     $.ajax({
    //         type: "PUT",
    //         url: "https://list-techmaster123.herokuapp.com/userIdStorage/1",
    //         data: ` {
    //             "UI":${userID}
    //            }`,
    //         contentType: "application/json",
    //         dataType: 'json'
    //     });
    // })
});