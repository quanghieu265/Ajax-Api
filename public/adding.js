let form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    checkValidate();
    // lấy dữ liệu từ các ô input trong <form>
    let data = new FormData(event.target);

    let formJSON = Object.fromEntries(data.entries());

    let results = JSON.stringify(formJSON);

    // let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 2 & this.status == 201) {
    //         alert("Thêm Mới Học Viên Thành Công");
    //         window.location.replace("https://list-techmaster123.herokuapp.com");

    //     } else if (this.readyState == 2 & this.status !== 201) {
    //         alert("Thêm Mới Học Viên Không Thành Công");
    //         window.location.replace("https://list-techmaster123.herokuapp.com");
    //     }
    // }
    // xhttp.open("POST", "https://list-techmaster123.herokuapp.com/users", true);
    // xhttp.setRequestHeader("Content-Type", "application/json"); //content-type phải là application/json
    // xhttp.send(results);
    if (checkValidate()) {
        $.ajax({
            type: "POST",
            url: "https://list-techmaster123.herokuapp.com/users",
            data: JSON.stringify(results),
            contentType: "application/json",
            dataType: 'json'
        }).done(function() {
            alert("Thêm Mới Học Viên Thành Công");
            window.location.replace("https://list-techmaster123.herokuapp.com");
        }).fail(function() {
            alert("Có lỗi xảy ra, Thêm Mới Học Viên Không Thành Công");
        });
    }

}