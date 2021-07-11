function inchtoFeet(inch) {
	var feet = inch / 12;
	return feet;
}
var balance = [156, 288, 300];
var naeem = inchtoFeet(balance[0]);

console.log(naeem);

var dulu = inchtoFeet(288);
console.log(dulu);

var abir = inchtoFeet(300);
console.log(abir);
