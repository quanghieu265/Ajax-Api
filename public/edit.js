//Lấy số ID dựa theo URL
let searchParams = new URLSearchParams(window.location.search); //window.location.search trả lại kết quả là phần truy vấn của URL 
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
    //Chạy hàm kiểm tra dữ liệu form
    checkValidate();

    //Dữ liệu hợp lệ thì bắt đầu PUT(sửa) dữ liệu lên sever
    if (checkValidate()) {
        let data = new FormData(event.target);

        let formJSON = Object.fromEntries(data);

        let results = JSON.stringify(formJSON);


        // Sửa dữ liệu dựa theo số ID đã được lấy từ URL và lưu vào userID
        $.ajax({
            type: "PUT",
            url: `https://list-techmaster123.herokuapp.com/users/${userID}`,
            data: results,
            contentType: "application/json",
            dataType: 'json',
        }).done(function() {
            alert("Thay Đổi Thông Tin Thành Công");
            window.location.replace("https://list-techmaster123.herokuapp.com");
        }).fail(function() {
            alert("Thay Đổi Thông Tin Không Thành Công");
            window.location.replace("https://list-techmaster123.herokuapp.com");
        });
    }
}