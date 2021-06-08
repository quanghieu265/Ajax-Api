let number = "1"; // Số page đầu tiên
let totalPage = $(".page-item").length - 2; // Tổng số page 


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
    rebuildHtml();
    if ($("#sort").val() === "old") {
        $.ajax({
            type: "GET",
            url: "https://list-techmaster123.herokuapp.com/users" + `?_page=${number}&_limit=${limitNumber}`
        }).done(getData);
    } else {
        $.ajax({
            type: "GET",
            url: "https://list-techmaster123.herokuapp.com/users" + `?_sort=id&_order=desc&_page=${number}&_limit=${limitNumber}`
        }).done(getData);
    }

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