

// 1. Count the occurrences.

const CountTheOccurrences = (str)=>{
    const words = str.split(' ');
    const wordsCount = new Map();
    for (const word of words) {
        if (wordsCount.has(word)) {
            wordsCount.set(word, wordsCount.get(word) + 1);
        }
        else{
            wordsCount.set(word, 1);
        }
    }
    return wordsCount;
};
let str = "The sunset sets at twelve o' clock clock sets hi hi what why The" 
const wordsCount = CountTheOccurrences(str);
// console.log(wordsCount);


// 2. Only unique items are allowed.

const removeDuplicates = (num)=>{
    return [...new Set(num)];
};

const num = [1,2,3,4,5,6,8,6,4,2,1];
const uniqueArray = removeDuplicates(num);
// console.log(uniqueArray);


// 3. Swap the values.
const swap = (x, y) => {
    return [x,y] = [y, x];
};

const x = 5;
const y = 10;
const swapedNum = swap(x, y);
// console.log(swapedNum);


// 4. Access random elements.

const AccessRandomElements = (arr) => {
    [a, b, ...rest] = arr;
    return [a, b, rest[rest.length-1]];
};

let arr = [1, 2, 3, 4, 5];
const result = AccessRandomElements(arr);
console.log(result);


// 5. Min and max values.
const MinMax = (arr1) => {
    let min = Math.min(...arr1);
    let max = Math.max(...arr1);
    return {min:min, max:max};
};
let arr1 = [5, 2, 7, 1, 9];
const output = MinMax(arr1)
console.log(output);


// 6. Nested Objects.

const NestedObjects = (person) => {
    ({name, address:{street}} = person);
    return {name:name, street:street}
};

const person = {
    name:'Mithun',
    age:'21',
    address:{
        street:"B8, Block B, Industrial Area.",
        city:"Sector 62, Noida",
        state:"Uttar Pradesh",
    }
};

const Result = NestedObjects(person);
console.log(Result);
