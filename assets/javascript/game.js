 	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 	var hallow ["SUPERNATURAL", "COBWEB", "BROOMSTICK", "HOWL", "SKELETONS", "NOOSE", "GRAVE", "CREEP", "SCREAM", "CANDY APPLES"];
 	//do we ant this global? we can also put it in pickRandomWord()
 	var guessed =[] //array for guesses letters

    var guesses_left = 10;
    var word;
    var guess;
    var words;
    var count;
    var space; // var for spaces

    /*$("#guesses").text(guesses_left);
    var wins = 0;
    $("#victory").text(wins);
    var losses = 0;
    $("#defeat").text(losses);*/

    function pickRandomWord(){ 
    var randomNum = Math.floor(Math.random()*hallow.length);
    randomWord = hallow[randomNum].toLowerCase();
    console.log(“The word is: ” + randomWord);
	}


    // //Checks if keyopress
    // document.onkeyup = function(event){
    //     if(event.keyCode <= 90 && event.keyCode >= 65 && wrongLetter.includes(event.key) == false){
    //         wordSearch(event.key); // this fucntion can be replaced with whatever we need
    //     }
    // }
    // //===========================
