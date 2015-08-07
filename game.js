
<script>
'use strict';

var question
var answer
var guess
var message

Game = function (question, answer, guess, message) {
	this.question = question;
	this.answer = answer;
	this.guess = 0;
	this.message = '';
	this.playGame = function() {
		this.guess = prompt(this.question);

		for ( var i = 0; i < 26)

		
		alert(this.message);
		if (this.guess < this.answer) {
			this.message = 'I am offended that you think so little of me.';
		} else if (this.guess > this.answer) {
			this.message = 'Whoa, it\'s a cookie, not a candy bar, man!';
		} else {  
			this.message = 'Dead on! Got any milk?';
		}
	}	
};
var firstGame = new Game('Guess how many chocolate chips are in my imaginary cookie!', 27);	
firstGame.playGame();
</script>

// Friday - notes off of class sample:
var firstHint = document.getElementById('first-hint')
first.Hint.innerHTML = hint1;

function addToHintList() {
	var hintListItem = document.createELement('li'):
	var hintNode = document.createTextNode(hint1)
	hintListItem.appendChild'(hintNode);
	document.getElementById('hint-list').appendChild(hintListItem);('')
}























