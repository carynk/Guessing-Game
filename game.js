
<script>
'use strict';

Game = function (question, answer) {
	this.question = question;
	this.answer = answer;
	this.guess = 0;
	this.message = '';
	this.playGame = function() {
		this.guess = prompt(this.question);

		for ( var i = 1; i < 5; i++) {

			
			if (this.guess < this.answer) {
				this.message = 'I am offended that you think so little of me. This was guess ' + i + ' of 5';
				alert(this.message);
				this.guess=prompt("Try again");
			} else if (this.guess > this.answer) {
				this.message = 'Whoa, it\'s a cookie, not a candy bar, man! This was guess ' + i + ' of 5';
				alert(this.message);
				this.guess=prompt("Try again");
			} else {  
				this.message = 'You read my mind! Got any milk?';
				alert(this.message);
				break;
			}
		}	
		alert('Thank you for playing.');
	}	
}

var firstGame = new Game('Guess how many chocolate chips are in my imaginary cookie!', 27);	
firstGame.playGame();
</script>

// Friday - notes off of class sample:
//var firstHint = document.getElementById('first-hint')
//first.Hint.innerHTML = hint1;

//function addToHintList() {
//	var hintListItem = document.createELement('li'):
//	var hintNode = document.createTextNode(hint1)
//	hintListItem.appendChild'(hintNode);
//	document.getElementById('hint-list').appendChild(hintListItem);('')
//}























