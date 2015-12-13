var Dice = function(againOnSix) {
	this.turn = 0;
	this.againOnSix = againOnSix;
	var red = "#FF0000";
	var blue = "#0000FF";
	var green = "#00FF00";
	var yellow = "#FFFF00";
	this.colors = [{color: red, name: "red"}, {color: blue, name: "blue"}, {color: green, name: "green"}, {color: yellow, name: "yellow"}];
};
Dice.prototype.roll = function(ele) {
	var num = Math.round(Math.random()*5 + 1);
	console.log(this.colors[this.turn], this.turn);
	ele.html(num).css({color: this.colors[this.turn].color});
	if (!(num === 6 && this.againOnSix)) {
		this.turn++;
	}
	if (this.turn >= this.colors.length) {
		this.turn = 0;
	}
};
Dice.prototype.removeColor = function(name) {
	for (var i = 0; i < this.colors.length; i++) {
		if (this.colors[i].name == name) {
			return this.colors.splice(i, 1);
		}
	}
};