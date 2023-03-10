
//? 1) Password Validator

function passwordValidator(password, confirmedPassword) {
    if (password == confirmedPassword) {
        console.log("Password Matched. Password validation Successful.");
    }
    else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

let password = "Password"
let confirmedPassword = "Password"
// passwordValidator(password, confirmedPassword)
//* Output: Password Matched. Password validation Successful.


//? 2) Calculator

function Calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;

        case "/":
            console.log(num1 / num2);
            break;

        default:
            console.log("Invalid Operator");
            break;
    }
}

let num1 = 6
let num2 = 3
let operator = "+"
// Calculator(num1, num2, operator)
//* Output: 9


//? 3) Color Mixer

function colorMixer(color1, color2) {
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("orange");
                    break;

                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;

        case "blue":
            switch (color2) {
                case "yellow":
                    console.log("green");
                    break;

                default:
                    console.log("Invalid color combination");
                    break;
            }

        default:
            console.log("Invalid color combination");
            break;
    }
}

let color1 = "red"
let color2 = "yellow"
// colorMixer(color1,color2)
//* Output: orange


//? 4) Highest Marks

function highestMarks(marks) {
    let Result = 0
    for (let singlMmarks of marks) {
        if (Result < singlMmarks) {
            Result = singlMmarks
        }
    }

    console.log(Result);
}


let marks = [39, 78, 32, 88, 45]
// highestMarks(marks)
//* Output:85


//? 5) Capitalize

function capitalize(userName) {
    let name = (userName.charAt(0).toLowerCase()) ? userName.charAt(0).toUpperCase() + userName.slice(1) : userName
    console.log(name);
}

let userName = "vivek"
// capitalize(userName)
//* Output: Vivek


//? 6) Vowel Counter

function vowelCounter(name) {
    let count = 0
    for (let char of name) {
        char = char.toLowerCase()
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count += 1
        }
    }
    console.log(count);
}

let Name = "vivek"
// vowelCounter(Name)
//* Output: 2


//? 7) Remove Duplicates

function removeDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}

let arr = ["item1", "item2", "item3", "item1", "item2", "item3", "item4", "item5", "item6", "item5"]
removeDuplicates(arr)
//* Output: ['item1', 'item2', 'item3', 'item4', 'item5']


//? 8) Inverted right-angled triangle pattern with asterisks

function trianglePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

let n = 6
// trianglePattern(n)
// * Output:******
//          *****
//          ****
//          ***
//          **
//          *


//? 9) Check for divisibility

function divisibleby3not2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 == 0 && numbers[i] % 2 != 0) {
            console.log(numbers[i]);
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14]
// divisibleby3not2(numbers)
//* Output: 3, 9, 66


//? 10) Correct a bug

function double(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] = cart[i] * 2
    }
    return cart
}

let cart = [2, 4, 5, 6, 7, 3, 9, 2]
// console.log(double(cart));
//* Output: [4, 8, 10, 12, 14, 6, 18, 4]


//? 11) Unit converter

let unitConverter = (Celsius) => {
    return Celsius * 9 / 5 + 32
}

let Celsius = 82
let Fahrenheit = unitConverter(Celsius)
// console.log(Fahrenheit + "°F");
//* Output: 179.6°F


//? 12) Calculate rental cost

let calculateRentalCost = (days, carType) => {
    switch (carType) {
        case "Economy":
            console.log("Rental cost is:" + 4000 * days);
            break;

        case "Midsize":
            console.log("Rental cost is:" + 10000 * days);
            break;

        case "Luxury":
            console.log("Rental cost is:" + (20000 * days));
            break;

        default:
            console.log("invalid car type");

            break;
    }
}

let days = 15
let carType = "Midsize"
// calculateRentalCost(days,carType)
//* Output: Rental cost is:150000

//? 13) Bill splitter

function billSplitter(dishCost, numPeople) {
    let totalCost = 0
    for (let cost of dishCost) {
        totalCost += cost
    }
    const costPerPerson = totalCost / numPeople
    return {
        totalBill: totalCost,
        billPerPerson: costPerPerson
    };
}
const dishCost = [10, 15, 20, 5]
const numPeople = 5
const bill = billSplitter(dishCost, numPeople)
//   console.log(bill)
//* Output: { totalBill: 55, billPerPerson: 10 }


//? 14) Calculate the final order price

let totalCostOfItem = (cartObj) => {
    let totalcost = 0
    for (let i = 0; i < cartObj.length; i++) {
        let item = cartObj[i]
        let itemcost = item.unitPrice * item.quantity
        totalcost += itemcost
    }
    return totalcost
}
let cartObj = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 2, quantity: 10 },
]
let cost = totalCostOfItem(cartObj)
// console.log(cost)
//* Output: 60

//? 15) Calculate the percentage of the discount

// for multiple product 
let percentageOfTheDiscount = (products) => {
    let discountPercentage = []
    for (let i = 0; i < products.length; i++) {
        let product = products[i]
        discountPercentage.push(Math.floor(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100) + "%")
    }
    return discountPercentage
}

let products = [
    { originalPrice: 100, discountedPrice: 80 },
    { originalPrice: 1230, discountedPrice: 1050 },
    { originalPrice: 1500, discountedPrice: 1200 },
    { originalPrice: 1900, discountedPrice: 1500 },
]
console.log(percentageOfTheDiscount(products))
//* Output: ['20%', '14%', '20%', '21%']

// for single product 
let percentageOfTheDiscount1 = (originalPrice, discountedPrice) => {
    let discount = originalPrice - discountedPrice
    let discountPercentage = Math.floor(discount / originalPrice * 100) + "%"
    return discountPercentage
}

let originalPrice = 100
let discountedPrice = 80
// console.log(percentageOfTheDiscount1(originalPrice, discountedPrice));
//* Output: 20%


//? 16) Generate a random number

let randomNumber = (() => {
    // console.log(Math.floor(Math.random() * 100) + 1)
})()
//* Output:It prints random number between 1 to 100

//? 17) Build a banking application

let deposit = (user, amount) => {
    user.balance += amount
}

let withdraw = (user, amount) => {
    if (user.balance >= amount) {
        user.balance -= amount
    }
    else {
        console.log("Insufficient balance");
    }
}

let user = { name: "Vivek", balance: 100 }
// deposit(user,200)
// console.log(user);
//* Output: { name: "Vivek", balance: 300 }
// withdraw(user,400)
// console.log(user);
//* Output: { name: "Vivek", balance: 0 }

