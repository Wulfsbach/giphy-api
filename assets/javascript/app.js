var topics = ["Mass Effect" , "Dragon Age" , "God Of War", "Skyrim"];



function displayGif(){
    $("#gifs-show-here").empty();
    var game = $(this).attr("data-topic");
    var queryURL="https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=WGb3CFgvuLaFdueJlggd9q05IMQt8yxS&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(queryUrl);
        // console.log(response);
      
      
var results = response.data;

for (var i = 0; i <results.length; i++){
    var GameImages = results[i].images.fixed_height.url
    var gameDiv= $("<div>");
    var gameText= $("<p>").text("Rating: " + results[i].rating);
    var gameImage=$('<img src="' + GameImages+'">');

    gameDiv.append(gameText);
    gameDiv.append(gameImage);

    $("#gifs-show-here").append(gameDiv);
}


        })
    };

























function createButtons(){
$('#buttonSection').empty();
    for( var i= 0; i < topics.length; i++){
        var gameBtn= $('<button>');
        gameBtn.addClass('gameBtn');
        gameBtn.attr('data-topic', topics[i]);
        gameBtn.text(topics[i]);
        $('#buttonSection').append(gameBtn);
    }
}


$("#addGif").on("click", function(event){
    event.preventDefault();
    var game = $("#gif").val().trim();
    topics.push(game);
    createButtons();
})






$(document).on('click','.gameBtn', displayGif);
createButtons();
