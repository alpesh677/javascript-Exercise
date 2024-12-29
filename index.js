//task:01 Need to create JavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)
function sumNumberString(str) {
	const numbers = str.match(/-?\d+/g);
	return numbers ? numbers.reduce((sum, num) => sum + parseInt(num), 0) : 0;
}
console.log(sumNumberString("foo8bar8cat2tc2")); //20
console.log(sumNumberString("abc-123def456")); //333
console.log(sumNumberString("")); //0

// Task 2: Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,9, 10.9")
function sumString(str) {
	return str.split(",").reduce((sum, num) => sum + parseFloat(num.trim()), 0);
}
console.log("Task 2");
console.log(sumString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,9, 10.9")); //57.3
console.log(sumString("1.5, 5.5, 3.1"));

// Task 3: Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
	calculateArea() {
		return 0;
	}
}
class Circle extends Shape {
	calculateArea(radius) {
		return Math.PI * radius * radius;
	}
}
class Triangle extends Shape {
	calculateArea(base, height) {
		return (base * height) / 2;
	}
}
let circle = new Circle();
let triangle = new Triangle();
console.log("Task 3");
console.log(circle.calculateArea(5));
console.log(triangle.calculateArea(5, 6));

// Task 4: Write a JavaScript program that creates a class called University with properties for university names and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

console.log("Task 4 ");
class University {
	constructor(name) {
		this.name = name;
		this.departments = new Set();
	}
	addDepartment(department) {
		this.departments.add(department);
		console.log("Added department:", department);
	}

	removeDepartment(department) {
		this.departments.delete(department);
		console.log("Removed department:", department);
	}

	displayDepartments() {
		console.log("Departments:", Array.from(this.departments));
	}
}

const university = new University("ABC University");
university.addDepartment("Computer Science");
university.addDepartment("Mathematics");
university.addDepartment("Information Technology");
university.removeDepartment("Information Technology");
university.displayDepartments();

//Task 5: Write a program to print fibonacci series. Take the number of steps from input using HTML Inputand when click on Print button, using JS print the entered number of steps in the fibonacci series on HTML page.

console.log("Task 5");
// HTML part:
/*
<input type="number" id="steps" min="1">
<button onclick="printFibonacci()">Print</button>
<div id="result"></div>
*/

function generateFibonacci() {
	const steps = parseInt(document.getElementById("steps").value);
	const series = printFibonacci(steps);
	document.getElementById("result").innerHTML = series.join(", ");
}
function printFibonacci(n) {
	const series = [0, 1];
	for (let index = 0; index < n; index++) {
		series.push(series[i - 1] + series[i - 2]);
	}
	return series;
}

// Task 6: Write a program to find the factorial of a number using a recursive function
function factorial(n) {
	if (n === 0 || n === 1) return 1;

    return n * factorial(n-1);
}

console.log("Task 6");
console.log(factorial(5));
console.log(factorial(6));