let myObj;
let userID;
let index;

$.ajax({
    type: "GET",
    url: "https://list-techmaster123.herokuapp.com/users" + "?_sort=id&_order=desc"
}).done(getData);

function getData(responseText) {
    myObj = responseText;
    // Cách 1: dùng jquerry để clone div
    for (i = 0; i < myObj.length; i++) {
        // <!-- $('.cloneitem:first').clone().appendTo('.student-list'); -->
        // <!-- Mỗi vằng lặp i sẽ clone lại rồi fill giá trị -->
        myObj[i].name == "" ? $(".name").eq(i).text("chưa biết") : $(".name").eq(i).text(myObj[i].name);
        myObj[i].birthday == "" ? $(".birth").eq(i).text("chưa biết") : $(".birth").eq(i).text(myObj[i].birthday);
        myObj[i].email == "" ? $(".email").eq(i).text("chưa biết") : $(".email").eq(i).text(myObj[i].email);
        myObj[i].phone == "" ? $(".number").eq(i).text("chưa biết") : $(".number").eq(i).text(myObj[i].phone);
        $(`.edit:eq(${i})`).attr("href", `./edit-form.html?id=${myObj[i].id}`);
        $(`.remove:eq(${i})`).attr("data-id", `${myObj[i].id}`);

        // điều kiện để không clone ở cuôi vòng lặp
        if (i < myObj.length - 1) {
            $(".info-list:first").clone().appendTo(".student-list");
        }
    }

    $('.remove').click(function() {
        $('.modal-show').toggleClass('show');
        $('.modal').toggleClass('fade-in');
        userID = $(this).data("id");
        index = $(".remove").index(this);
    })

}