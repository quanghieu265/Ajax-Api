let searchParams = new URLSearchParams(window.location.search);
let userID = searchParams.get("id");

$.ajax({
    type: "GET",
    url: `https://list-techmaster123.herokuapp.com/users/${userID}`,
}).done(function(obj) {
    $('#name').val(`${obj.name}`);
    $('#birth').val(`${obj.birthday}`);
    $('#email').val(`${obj.email}`);
    $('#phone').val(`${obj.phone}`);
})

let form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    checkValidate();
    if (checkValidate()) {
        let data = new FormData(event.target);

        let formJSON = Object.fromEntries(data);

        let results = JSON.stringify(formJSON);


        // Gửi dữ liệu dựa theo số ID đã được lưu trong file userIdStorage
        $.ajax({
            type: "PUT",
            url: `https://list-techmaster123.herokuapp.com/users/${userID}`,
            data: results,
            contentType: "application/json",
            dataType: 'json',
        }).done(function() {
            alert("Thay Đổi Thông Tin Thành Công")
        }).fail(function() {
            alert("Thay Đổi Thông Tin Không Thành Công");
        });
    }
}