// 16_5-2 Explain fibonacci series once again

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// fibonacci iterative method
function fiboIterative(num) {
	var fibo = [1, 1];
	for (let i = 2; i <= num; i++) {
		var nextFibo = fibo[i - 1] + fibo[i - 2];
		fibo.push(nextFibo);
	}
	return fibo;
}

var newFibo = fiboIterative(10);
console.log('Iterative =>', newFibo);

// fibonacci recursive method
function fiboRecursive(num) {
	// stopping condition
	if (num == 0) {
		return [1];
	} else if (num == 1) {
		return [1, 1];
	}

	// recursive call
	var fibo = fiboRecursive(num - 1);
	var nextFibo = fibo[num - 1] + fibo[num - 2];
	fibo.push(nextFibo);

	return fibo;
}

var recursiveFibo = fiboRecursive(7);
console.log('Recursive =>', recursiveFibo);
