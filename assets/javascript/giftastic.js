$(document).ready(function() {
var userInput;//This will be a dynamic input later.
var APIkey = "xhIGew1HBOnADdrg3YwPT2hUaapAVUV4";
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key="+APIkey;
var choiceInput = ["pangolin","platypus","echidna","spider"];//each search input is placed into this array.

//creates a button for each choice in the array.
function buttonCreator(){
    for(var i = 0; i<choiceInput.length; i++){
        $("#buttons-col").append("<button class ='button' data-name='"
        +choiceInput[i]+"'>"+choiceInput[i]+"</button>");   
    };
};

function userInput(){
    userInput = $("#user-input").val().trim();
    //creat input and set the input equal to userInput variable.
    //userInput =
};

function APIcall(){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);     
    });
};

buttonCreator();




});//closes document.ready