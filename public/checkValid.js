function checkValidate() {
    let validStatus = true;
    $(".error-text").text("");
    if ($("#name").val() === "") {
        validStatus = false;
        $("#name ~ div").text('Họ tên không được để trống');
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test($("#email").val()) === false) {
        validStatus = false;
        $("#email ~ div").text(` Email không đúng định dạng, gợi ý : ${$("#name").val().split(" ").join("")}@gmail.com `);
    }
    if ($("#phone").val() === "") {
        validStatus = false;
        $("#phone ~ div").text('Số điện thoại không được để trống');
    }

    return validStatus;
}