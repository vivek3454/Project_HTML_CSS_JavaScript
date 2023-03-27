
// 1. Type Conversion

const convertToNumber = (str) => {

    try {
        const number = Number(str);
        if (isNaN(number)) {
            throw Error();
        }
        return number;
    }
    catch (error) {
        return "Invalid number";
    }
}

const str = "123"; // 123
// const str = "abc"; // Invalid number
console.log(convertToNumber(str));


// 2. Building Robust Functions in JavaScript

const getPerson = (obj) => {
    try {
        const name = obj.name;
        const age = obj.age;
        if (name !== "" || age !== "") {
            throw Error();
        }
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return "Invalid parameter type";
    }
}

const obj = { name: "Mithun", age: 19 }; // Name: Mithun, Age: 19
// const obj = ["name", "Mithun"] // Invalid parameter type
console.log(getPerson(obj));


// 3. Car Description Class

class Car {
    company = "Skoda";
    model = "Rapid";
    year = "2022";

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new Car();
console.log(myCar.getDescription());

// 4. Employee Class Challenge.

class Employee {
    name = "Mithun";
    position = "Senior Web Developer";
    salary = "80,000";

    getsalary() {
        return this.salary;
    }

}


const employee1 = new Employee();
console.log(employee1.getsalary()); // 80,000


// 5. Implementing a Person Class with Default Values

class Person {

    name = "Unknown";
    age = "0";

    constructor(name, age) {
        if (name === undefined && age === undefined) {
            this.name = "Unknown";
            this.age = 0;
        }
        else {
            this.name = name;
            this.age = age;
        }
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }

}

const person1 = new Person("Mithun", 20);
console.log(person1.getDetails()); // Name: Mithun, Age: 20

const person2 = new Person();
console.log(person2.getDetails()); // Name: Unknown, Age: 0


// 6. Using Static Method to Add Two Numbers with Calculator Class

class Calculator {

    static add(num1, num2) {
        return num1 + num2;
    }
}

const add = Calculator.add(24, 44);
console.log(add); // 68


// 7. Password Checker

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getPassword() {
        return this.password.replace(/./g, "*")
    }

    setPassword(newPassword) {
        const hasNumber = /\d/.test(newPassword);
        const hasUppercase = /[A-Z]/.test(newPassword);
        const isLong = newPassword.length >= 8;
        if (hasNumber && hasUppercase && isLong) {
            this._password = newPassword;
        } else {
            console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }
    }
}

const user = new User("Mithun", "Password123");
console.log(user.getPassword());
user.setPassword("Password123")


// 8. Adding a Method to a Prototype

function Student(name){
    this.name = name;
}

Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
}

const student = new Student("Mithun");
student.printDetails();


// 9. Check the presence using closures

const numberChecker = (arr) => {
    const checkNum = (num) => {
        for (const n of arr) {
            if (n === num) {
                return true;
            }
        }
        return false;
    }
    return checkNum;
}

const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);
console.log(checkNum(3)); // true


// 10. Filter by Category

const filterBYCategory = (products) => {
    const filterBYCategoryInner = (category) =>{
        return products.filter((product) => product.category === category);
    }
     return filterBYCategoryInner;
}

const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
];


const ClothingProducts = filterBYCategory(products)("Clothing")
console.log(ClothingProducts);// [{name: "Shirt", category: "Clothing"},{name: "Pants", category: "Clothing"}]

