var topics = ["Mass Effect", "Dragon Age", "God Of War", "Skyrim"];



function displayGif() {
    $("#gifs-show-here").empty();
    var game = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=WGb3CFgvuLaFdueJlggd9q05IMQt8yxS&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(queryUrl);
        // console.log(response);


        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var GameImages = results[i].images.fixed_height_still.url;
            var GameImages2 = results[i].images.fixed_height.url;
            var gameDiv = $("<div>");
            var gameText = $("<p>").text("Rating: " + results[i].rating);
            
            var gameImage =$("<img>");
            gameImage.addClass('itMoves');
            gameImage.attr("src", GameImages);
            gameImage.attr("data-still", GameImages);
            gameImage.attr("data-animate", GameImages2);
            gameImage.attr("data-state", "still");
           

            gameDiv.append(gameText);
            gameDiv.append(gameImage);

            $("#gifs-show-here").append(gameDiv);


            
        }


    })
};
$('.itMoves').on("click", function () {
    var mode = $(this).attr("data-state");

    if (mode === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})




function createButtons() {
    $('#buttonSection').empty();
    for (var i = 0; i < topics.length; i++) {
        var gameBtn = $('<button>');
        gameBtn.addClass('gameBtn');
        gameBtn.attr('data-topic', topics[i]);
        gameBtn.text(topics[i]);
        $('#buttonSection').append(gameBtn);
    }
}


$("#addGif").on("click", function (event) {
    event.preventDefault();
    var game = $("#gif").val().trim();
    topics.push(game);
    createButtons();
})






$(document).on('click', '.gameBtn', displayGif);
createButtons();
