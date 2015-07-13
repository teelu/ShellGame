$(document).ready(function() {
	//Array for keeping moves
	var movesArray = [];
	//cup holder(har har har)
	var cupArray = [];



	//cup functions
	function cup(name,position,hasBall) {
		this.name = name;
		this.position = position;
		this.hasBall = hasBall;
		this.getKeyFromValue = function(value) {
			for(var keys in this) {
				if (this[keys]==value) {
					return this;
				}
			}
		}
	}

	//Move constructor
	function move(position,direction) {
		this.position = position;
		this.direction = direction;
	}


	function executeMove(move) {
		var cupAffectedPosition;
		var cupAffected;
		var currentCupPosition = move.position;
		var currentCup = cupArray[currentCupPosition];
		if (move.direction == 'left') {
			cupAffectedPosition = move.position-1;
		}
		else if (move.direction == 'right') {
			cupAffectedPosition = move.position+1;
		}
		cupAffected = cupArray[cupAffectedPosition];
		//rearrage cups
		cupArray[cupAffectedPosition] = currentCup;
		cupArray[currentCupPosition] = cupAffected;
		return [cupArray[cupAffectedPosition], cupArray[currentCupPosition]];
		
	}
	//generate cups
	for (var i = 0; i < 3; i++) {
		cupArray.push(new cup("cup" + eval('i+1'),i,false));
		console.log(cupArray);
	}
	console.log(cupArray[0].name + " " + cupArray[0].hasBall);

	 //Pick a cup
	 console.log("Where to insert ball");
	 var cupSelected = prompt();
	 //set cup selected
	 cupArray[cupSelected].hasBall = true;

	 console.log(cupArray);

	var testMove = new move(2,"left");

	executeMove(testMove);

	//  var testMove = new move(2,"left");

	//  var testMove2 = new move(1,"right");
	
	// console.log(executeMove(testMove));

	// console.log(cupArray);

	 



	 // $('html').keypress(function(e) {
	 // 	console.log(String.fromCharCode(e.keyCode));
	 // });





});