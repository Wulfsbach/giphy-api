


var Topics= ["Star Wars", "Mass Effect", "Dragon Age", "Halo"];

function buttonCreation(){
$("#button-section").empty();

for (var i = 0; i <Topics.length; i++){
var button = $("<button>");
btn.addClass("topic");
btn.attr("data-topic", Topics[i]);
btn.text(Topics[i]);
$("#button-section").prepend(btn);
$("#gif").val('');
}
};



$("#add-gif").on("click", function() {
    var topic =$(this).attr("data-topic");
    var queryUrl ="https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=WGb3CFgvuLaFdueJlggd9q05IMQt8yxS$limit=10";



$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response)
{
console.log(response);

var search = response.data;
for( var i = 0; i < Topics.length; i++){
    var gifDiv =$("<div>");
        var gifText= $("<p>"+ search[i].rating + "</p>");
        var gifImage= $("<img>");
        var imageURL= search[i].images.fixed_height.url;
        $(gifImage).attr("src", imageURL);
        $(gifDiv).append(p);
        $(gifDiv).append(gifImage);
        $("#gifs-show-here").append(gifDiv);
    }
})
})
