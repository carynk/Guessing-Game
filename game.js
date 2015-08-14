
'use strict'

//variables to access the DOM

var msg = document.getElementById('display-msg');

//Constructor to create Game object w/ properties and methods)

var Game = function (question, answer) {
	this.question = question;
	this.answer = answer; //right answer
	this.guess = 0; //player guess
	this.message = ''; //alert after each guess (var msg1 and 2?)
		
	this.playGame = function() {	
			this.guess = prompt(this.question); 
				for (var i = 0; i < 5; i++) {	//setting parameters for conditional guesses and messages
					
				if (this.guess < this.answer) {
					this.message = 'I am offended that you think so little of my imagination. This was guess ' + (i + 1) + ' of 5';
					msg.innerHTML = this.message;
					this.guess = prompt("You can do better than that. Try again.");
				} 
					else if (this.guess > this.answer) {
					this.message = 'Whoa, it\'s a cookie, not a candy bar, man! This was guess ' + (i + 1) + ' of 5';
					msg.innerHTML = this.message;
					this.guess=prompt("Really? C'mon now. Give it another shot.");

				} else {  
					this.message = 'You read my mind! Got any soy milk?';
					msg.innerHTML = this.message;
				}
			}	
		msg.innerHTML = 'Thank you for playing. Please exit my imagination now.';
	}
}
//CREATING INSTANCES OF THE GAME
var firstGame = new Game('Guess how many chocolate chips are in my imaginary cookie!', 27);	

firstGame.playGame();




