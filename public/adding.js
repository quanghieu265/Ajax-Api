let form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    //Chạy hàm kiểm tra dữ liệu form
    checkValidate();
    //Dữ liệu hợp lệ thì bắt đầu POST(tạo mới) dữ liệu lên sever
    if (checkValidate()) {

        // lấy dữ liệu từ các ô input trong <form>
        let data = new FormData(event.target);

        let formJSON = Object.fromEntries(data.entries());

        let results = JSON.stringify(formJSON);
        //POST
        $.ajax({
            type: "POST",
            url: "https://list-techmaster123.herokuapp.com/users",
            data: results,
            contentType: "application/json",
            dataType: 'json'
        }).done(function() {
            alert("Thêm Mới Học Viên Thành Công");
            window.location.replace("https://list-techmaster123.herokuapp.com");
        }).fail(function() {
            alert("Có lỗi xảy ra, Thêm Mới Học Viên Không Thành Công");
            window.location.replace("https://list-techmaster123.herokuapp.com");
        });
    }
}