$(document).on("click", ".get-info-btn", function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var newsTitleHtml = "";
            data.forEach(function(value, key){
                newsTitleHtml = newsTitleHtml + '<div class="row w-100 mt-5"><button class="btn btn-dark w-100">'+ value.title +'</button></div>'
            })
            $(".news-titles").html(newsTitleHtml)
        },
        error: function (error) {
            console.log(error)
        }
    })
})