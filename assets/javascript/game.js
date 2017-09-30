 	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 	var hallow = ["SUPERNATURAL", "COBWEB", "BROOMSTICK", "HOWL", "SKELETONS", "NOOSE", "GRAVE", "CREEP", "SCREAM", "CANDY APPLES"];
 	//do we ant this global? we can also put it in pickRandomWord()
 	var guessed =[]; //array for guessed letters

    var guesses_left = 10;
    var word;
    var guess;
    var randomWord;
    var count;
    var space; // var for spaces

    /*$("#guesses").text(guesses_left);
    var wins = 0;
    $("#victory").text(wins);
    var losses = 0;
    $("#defeat").text(losses);*/



    function keypress() {
    	guess = event.key.toUpperCase();
    	console.log(guess);
    		// set attribute
    	for (var i = 0; i < randomWord; i++) {
 			if (randomWord[i] === guess) {
 				$("#word_to_guess").text(guess);
 			}    

        }

    }

    function result() {
    	for (var i = 0; i < randomWord.length; i++) {
 			if (randomWord[i] === "-") {
 				$("#word_to_guess").append("&nbsp");
 				space += 1;
 			}
 			else {
 				$("#word_to_guess").append("_ ");
 			}
        }
        
    }

    //Checks if keyopress
    document.onkeyup = function(event){
        
        randomWord = hallow[Math.floor(Math.random()*hallow.length)];
        randomWord = randomWord.split("");
        console.log(randomWord);

        word = randomWord;

        	result();
 			keypress();   
 			 
    }

