$(document).ready(function() {


var choiceInput = ["pangolin","platypus","echidna","spider"];//each search input is placed into this array.

function buttonCreator(){
    $("#buttons-col").empty();
    for(var i = 0; i<choiceInput.length; i++){
        $("#buttons-col").append("<button class ='button' data-name='"
        +choiceInput[i]+"'>"+choiceInput[i]+"</button>");   
    };
};

function APIcall(word){
    var APIkey = "xhIGew1HBOnADdrg3YwPT2hUaapAVUV4";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+word+"&api_key="+APIkey+"&limit=16";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        $("#gifs-col").empty();
        var response = response.data
        console.log(response);
        for (var i = 0; i<response.length; i++){
            var animalImg = $('<img>');
            animalImg.attr("class","gif");
            animalImg.attr("data-still",response[i].images.fixed_height_still.url);
            animalImg.attr("data-animate",response[i].images.fixed_height.url);
            animalImg.attr("data-state", "still");
            animalImg.attr("src",response[i].images.fixed_height_still.url);
            // console.log(response[i].images.fixed_height_still.url);
            $("#gifs-col").append(animalImg);
        };
    }); 
};

buttonCreator();

$("#search").on("click", function() {
   // event.preventDefault();
    var userInp = $("#user-input").val().trim();
        choiceInput.push(userInp);
        APIcall(userInp);
        buttonCreator();
        console.log(choiceInput);    
});

$("#gifs-col").on("click", ".gif", function(){  
    console.log(this);
    var state = $(this).attr("data-state");    
    if (state === "still"){
        $(this).attr("src",$(this).attr("data-animate"));
        $(this).attr("data-state","animate");
    } else if (state==="animate"){
        $(this).attr("src",$(this).attr("data-still"));
        $(this).attr("data-state","still");
    }
});

$(document).on("click", ".button", function(){
    $("#gifs-col").empty();
    var d = $(this).attr("data-name");
    console.log("D IS:",d);
    APIcall(d);
});

});//closes document.ready