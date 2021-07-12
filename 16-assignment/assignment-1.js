// Problem one solve

// feetToMile
function feetToMile(feet) {
	let mile = feet / 5280; // There are 5280 foot in a mile

	console.log('Check Mile = >', mile.toFixed(1));

	return mile;
}

let result = feetToMile(90909);
result = result.toFixed(2);

console.log('Feet to Mile = >', result);

// Problem two solve

// woodCalculator
function woodCalculator(chair, table, cot) {
	var furniture = 1 * chair + 3 * table + 5 * cot;
	return furniture;
}

let price = woodCalculator(2, 3, 4);

console.log('My furniture cost = >', price);

// problem three solve

// brickCalculator
function brickCalculator(brick) {
	let building = brick;
	if (building <= 10) {
		return building * 15 * 1000;
	} else if (building <= 20) {
		return (10 * 15 + (building - 10) * 12) * 1000;
	} else return (10 * 15 + 10 * 12 + (building - 20) * 10) * 1000;
}

let tenOutput = brickCalculator(10);
let twentyOutput = brickCalculator(20);
let twentyAbove = brickCalculator(26);

console.log('First 1 to 10th floor = >', tenOutput);
console.log('Second 11 to 20th floor = >', twentyOutput);
console.log('Third 20th floor above = >', twentyAbove);

// Problem four slove

// tinyFriend
let name = ['Nayeem', 'Noman', 'Hira', 'Sua'];

function tinyFriend(arr) {
	let small = arr[0].length;
	let smallest;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length < small) {
			small = arr[i].length;
			smallest = arr[i];
			console.log('Counting loop =>', i);
		}
	}

	return smallest;
}

let myFriend = tinyFriend(name);

console.log('Show my small friends name => ', myFriend);
