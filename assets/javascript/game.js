 	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 	var guessed =[] //array for guesses letters

    var guesses_left = 10;
    var word;
    var guess;
    var words;
    var count;
    var space; // var for spaces




    $("#guesses").text(guesses_left);
    var wins = 0;
    $("#victory").text(wins);
    var losses = 0;
    $("#defeat").text(losses);
