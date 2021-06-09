let number = "1"; // Số page đầu tiên

function clickToPage() {
    if ($(this).text() == "Prev") {
        if (number > 1) {
            number--;
            changePage()
        }
    } else if ($(this).text() == "Next") {
        if (number < totalPage) {
            number++;
            changePage()
        }
    } else {
        number = $(this).text();
        changePage();
    }
}

function changePage() {
    let totalPage = $(".page-item").length - 2; // Tổng số page 

    //sửa lại html theo giá trị số trang hiện tại (number) và theo thứ tự (sort)
    changeValue()

    //Tạo trường hợp để sửa CSS cho nút Page
    $(".page-item").removeClass("active")
    $(".page-item").eq(number).addClass("active")


    if (number == "1") {
        $(".page-item").removeClass("disabled")
        $(".page-item:first-child").addClass("disabled")
    } else if (number == totalPage) {
        $(".page-item").removeClass("disabled")
        $(".page-item:last-child").addClass("disabled")
    } else {
        $(".page-item").removeClass("disabled")
    }
}