//1.SINGLE LINE

//without return value

const logSquare = (num) => console.log(num * num);

logSquare(5); // Output: 25

//with return value

const square = (num) => num * num;

console.log(square(5)); // Output: 25

//2. MULTI LINE

//without return value

const logArea = (length, width) => {
	const area = length * width;
	console.log(area);
};

calculateArea(5, 3); // Output: 15

//with return value

const calculateArea = (length, width) => {
	const area = length * width;
	return area;
};

console.log(calculateArea(5, 3)); // Output: 15
