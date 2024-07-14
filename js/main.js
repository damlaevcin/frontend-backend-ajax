$(document).on("click", ".get-info-btn", function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $(".id").text(data.id);
            $(".userid").text(data.userId);
            $(".title").text(data.title);
            $(".body").text(data.body);
        },
        error: function (error) {
            console.log(error)
        }
    })
})