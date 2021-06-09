let searchObj;
// //Tạo sự kiện cho nút Tìm Kiếm, lấy giá trị từ ô input và sửa lại html theo giá trị đó
$(".search-button").click(function() {
    inputValue = $("#name-student").val();
    if (inputValue === "") {
        alert("Vui Lòng Nhập Tên Học Viên");
    } else {
        if ($("#sort").val() === "old") {
            $.ajax({
                type: "GET",
                url: "https://list-techmaster123.herokuapp.com/users" + `?q=${inputValue}&_page=${number}&_limit=${limitNumber}`
            }).done(searchFunction);
        } else {
            $.ajax({
                type: "GET",
                url: "https://list-techmaster123.herokuapp.com/users" + `?q=${inputValue}&_sort=id&_order=desc&_page=${number}&_limit=${limitNumber}`
            }).done(searchFunction);
        }
    }
})

function searchFunction(searchData) {
    searchObj = searchData;
    //Kiểm tra giá trị ở ô input với các giá trị trong object.name
    if (searchObj.length == 0) {
        alert("Không Tìm Thấy Học Viên")
        changeValue();
    } else {
        rebuildHtml();
        getData(searchObj);
        // Vẽ lại thanh pagination
        $('.page-item').remove();
        $('.pagination').html(`
            <li class="page-item disabled"><a href="#">Prev</a></li>
            <li class="page-item active"><a href="#">1</a></li>
            <li class="page-item"><a href="#">Next</a></li>
            `);
        async function test() {
            const SearchDataFull = await getSearchDataFull(inputValue);
            console.log(SearchDataFull)
            creatPagination(SearchDataFull);
        }
        test();
    }
}

function getSearchDataFull(inputValue) {
    return $.ajax({
        url: "https://list-techmaster123.herokuapp.com/users" + `?q=${inputValue}`
    })
}

//Lấy lại giữ liệu khi để trống ô input
$("#name-student").change(function() {
    if ($("#name-student").val() == "") {
        changeValue();
        $('.page-item').remove();
        $('.pagination').html(`
        <li class="page-item disabled"><a href="#">Prev</a></li>
        <li class="page-item active"><a href="#">1</a></li>
        <li class="page-item"><a href="#">Next</a></li>
        `);
        creatPagination(userDataAll);
    }
})