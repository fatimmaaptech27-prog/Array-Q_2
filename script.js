console.log("Array: Create an array of five numbers and print all elements.")

let numbers = [24,88,90,12,27];

console.log(numbers);

console.log("Array: Create an array of three fruits and print the first and last elements.")

let fruits =["Grapes","Mango","Peach"];

console.log (fruits[0]);
console.log (fruits[2]);

console.log("Q3. Add Mango to the end of an array using push().");

let fruits2 = ["Apple", "Banana", "Orange"];
fruits2.push("Mango");
console.log(fruits2);

console.log("Q4. Find the length of the following array.");

let numbers2 = [10, 20, 30, 40, 50];
console.log(numbers2.length);

console.log("Q5. Write a function that prints Hello World.");

function greet() {
    console.log("Hello World");
}
greet();


console.log("Q6. Write a function that takes two numbers as parameters and prints their sum.");

function add(a, b) {
    console.log(a + b);
}
add(10, 20);

console.log("Q7. Write a function that takes a number and returns its square.");

function square(num) {
    return num * num;
}
console.log(square(5));



console.log("Q8. Write a function that checks whether a number is even or odd.");

function checkNumber(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkNumber(7);

console.log("Q9. Write a function to find the largest of two numbers.");

function largest(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
largest(15, 25);

console.log("Q10. Write a function that takes a name as an argument and prints a welcome message.");

function welcome(name) {
    console.log("Welcome " + name);
}
welcome("Fatima");



console.log("Q11. Create a student object with name, age, and class properties. Print all three properties.");

let student = {
    name: "Abdullah",
    age: 18,
    class: "10th"
};

console.log(student.name);
console.log(student.age);
console.log(student.class);


console.log("Q12. Create a car object with brand, model, and color properties. Print the car's brand.");

let car = {
    brand: "Toyota",
    model: "Corolla",
    color: "White"
};

console.log(car.brand);


console.log("Q13. Update the age of the student object to 20 and print it.");

let student2 = {
    name: "Ali",
    age: 18
};

student2.age = 20;
console.log(student2.age);

console.log("Q15. Create a student object with name and marks properties. Write a function that prints the student's name and marks.");

let student3 = {
    name: "Ali",
    marks: 85
};

function printStudent(student) {
    console.log(student.name);
    console.log(student.marks);
}

printStudent(student3);


