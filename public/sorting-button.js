// Tạo sự kiện khi giá trị của ô selected thay đổi

$("#sort").change(changeValue)

// Và sửa lại html theo giá trị đó
function changeValue() {
    rebuildHtml();
    if ($("#sort").val() === "old") {
        $.ajax({
            type: "GET",
            url: "https://list-techmaster123.herokuapp.com/users" + `?q=${inputValue}&_page=${number}&_limit=${limitNumber}`
        }).done(getData);
    } else {
        $.ajax({
            type: "GET",
            url: "https://list-techmaster123.herokuapp.com/users" + `?q=${inputValue}&_sort=id&_order=desc&_page=${number}&_limit=${limitNumber}`
        }).done(getData);
    }
}