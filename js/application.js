$(document).ready(function() {
	//Array for keeping moves
	var movesArray = [];


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

	function moveLeft(position) {
		return position--;
	}

	function moveRight(position) {
		return position++;
	}


	function move(position,direction) {

	}
	//cup holder(har har har)
	var cupArray = [];

	//generate cups
	for (var i = 1; i <= 3; i++) {
		cupArray.push(new cup("cup" + i,i,false));
		console.log(cupArray);
	}
	console.log(cupArray[0].name + " " + cupArray[0].hasBall);

	 //Pick a cup
	 console.log("Where to insert ball");
	 // var cupSelected = prompt();
	 // //set cup selected
	 // cupArray[cupSelected-1].hasBall = true;

	 console.log(cupArray);

	 $('html').keypress(function(e) {
	 	console.log(String.fromCharCode(e.keyCode));
	 });
	 console.log(cupArray[1].getKeyFromValue(2));






});