// 16_5-3 When to use loop or condition inside a function

// sum of three numbers
function addSum(num1, num2, num3) {
	var sum = num1 + num2 + num3;
	return sum;
}
var total = addSum(2, 3, 5);
console.log(total);

// sum of three numbers passing an array
function addSum2(numbers) {
	var sum = numbers[0] + numbers[1] + numbers[2];
	return sum;
}
var result = addSum2([10, 10, 10]);
console.log(result);

// sum of three numbers passing length
function addSum3(num) {
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		if (num[i] > 0) {
			sum = sum + num[i];
		} else {
			console.log('This is less than zero');
		}
	}
	return sum;
}
var totalNumber = addSum3([10, 40, 20, 30]);
console.log(totalNumber);
