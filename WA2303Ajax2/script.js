$.get('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw', 
    function(data){
    $('#error').html(data["error"]);
    $('#setup').html(data["setup"]);
    $('#delivery').html(data["delivery"]);
});

// $.ajax({
//     type: "GET",
//     url: "https://v2.jokeapi.dev/joke/Dark", 
//     async: false,
//     succes: function(data){
//     $('#error').html(data["error"]);
//     $('#setup').html(data["setup"]);
//     $('#delivery').html(data["delivery"]);
//     },
//     error: function(data) {
//         console.log("Deez nuts");
//     }
// });