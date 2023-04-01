// 1. Double using callback

const doubleUsingCallback = (arr, callback) => {
    const doubleArr = arr.map(callback);
    return doubleArr;
}

const arr = [1, 2, 3, 4, 5];
const callback = (num) => {
    return num * 2
}
const doubleArr = doubleUsingCallback(arr, callback);
console.log(doubleArr); // [2, 4, 6, 8, 10]


// 2. String Manipulation

const manipulateString = (str) => {
    const manipulateStr = str.toUpperCase();
    return () => {
        console.log(`The manipulated string is: ${manipulateStr}`);
    }
}

const str = "hello world!";
const logStr = manipulateString(str);
logStr(); // The manipulated string is: HELLO WORLD!


// 3. Age in Days

const ageInDays = (obj) => {
    const fullName = obj.firstName + " " + obj.lastName;
    const ageInDays = obj.age * 365;
    return () => {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
}

const obj = {
    firstName: "Mithun",
    lastName: "S",
    age: 20
}

const val = ageInDays(obj);
val(); // The person's full name is Mithun S and their age in days is 7300.


// 4. Arrange in alphabetical order

const arrangeInAlphabeticalOrder = (books, callback) => {
    const titles = books.map((title) => title.title)
    callback(titles);
}

const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
];

const callback1 = (titles) => {
    console.log(titles.sort());
}
arrangeInAlphabeticalOrder(books, callback1); // ['1984', 'Pride and Prejudice', 'The Catcher in the Rye', 'The Great Gatsby', 'To Kill a Mockingbird']


// 5. Greeting Promise

const greetingPromise = (name) => {
    return new Promise((resolve, reject) => {
        resolve(`Hello, ${name}!`)
    })
}

const name1 = "Mithun"
greetingPromise(name1).then((message) => {
    console.log(message); // Hello, Mithun!
})


// 6. Fetch results asynchronously

async function result() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            return response.json();
        })
        .then((value) => {
            console.log(value);
        })
}

result(); // {"userId": 1, "id": 1,"title": "delectus aut autem","completed": false}


// 7. Multiple requests

async function multipleRequests() {
    const [todoData, postData] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                return response.json();
            }),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                return response.json();
            })
    ]);


    // const todoData = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then((response)=>{
    //     return response.json();
    // });

    // const postData =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then((response)=>{
    //     return response.json();
    // });

    const result = {
        todo: todoData,
        post: postData
    };
    console.log(result);
}

multipleRequests();


// 8. Get Data from API and Display it on the browser console

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    });


// 9. Error Handling

const errorHandling = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/123456789')
        .then((response) => {
            if (!response.ok) {
                throw Error();
            }
            return response.json();
        })
        .then((value) => {
            console.log(value);
        })
        .catch((error) => {
            console.log("Error handled");
        });

}
errorHandling(); // Error handled


