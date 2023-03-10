
//? 1. Reverse String

const input = "Hello world!"
setTimeout(() => {
  const reversedString = Array.from(input).reverse().join('')
  // console.log(reversedString)
}, 2000)

// Output:!dlrow olleH


//? 2. Random Number Generator with Delay and Progress Indication

let delay = 3000
let remainingTime = delay / 1000

const RandomNumber = () => {
  console.log(Math.floor(Math.random() * 100) + 1)
}

// setInterval(() => {
//   console.log('Time remaining:' + remainingTime + 'seconds')
//   remainingTime--
//   if (remainingTime < 0) {
//     RandomNumber()
//     remainingTime = 3
//   }
// }, 1000)

// Output:
// Time remaining:3seconds
// Time remaining:2seconds
// Time remaining:1seconds
// Time remaining:0seconds
// 79
// and so on


//? 3. Build a feature for Store's Inventory

const items = {
  "item1": 10.99,
  "item2": 20.49,
  "item3": 15.99,
  "item4": 5.99,
}

const exchangeRate = 80 // 1 USD = 80 INR
const itemsInRupees = Object.entries(items).map(([items, priceInDollar]) => {
  const priceInRupees = Math.round(priceInDollar * exchangeRate)
  return [items, priceInRupees]
})


const itemsObjectInRupees = Object.fromEntries(itemsInRupees)
// console.log(itemsObjectInRupees)
// Output:{item1: 879, item2: 1639, item3: 1279, item4: 479}


//? 4. Filtering and Capitalizing: Books Published After 2010 with Author Names


const filterBooks = (books) => {
  const filteredBooks = []
  for (const book of books) {
    if(book.publicationYear < 2010){
      filteredBooks.push({title: book.title, author: book.author.toUpperCase(), publicationYear: book.publicationYear})
    }
  }
  return filteredBooks
}

const books = [
  { title: "The Hunger Games", author: "Suzanne Collins", publicationYear: 2008 },
  { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", publicationYear: 2005 },
  { title: "The Help", author: "Kathryn Stockett", publicationYear: 2009 },
  { title: "The Fault in Our Stars", author: "John Green", publicationYear: 2012 }
]

const filteredBooks = filterBooks(books)
for (const iterator of filteredBooks) {
  // console.log(iterator)
}
// Output:
// {title: 'The Hunger Games', author: 'SUZANNE COLLINS', publicationYear: 2008}
// {title: 'The Girl with the Dragon Tattoo', author: 'STIEG LARSSON', publicationYear: 2005}
// {title: 'The Help', author: 'KATHRYN STOCKETT', publicationYear: 2009}



//? 5. URL validation


const urlRegex = /^https?:\/\/[\w\d\S]+?\.[\w]+\/?$/
const url = 'https://regex.com/'

if (urlRegex.test(url)) {
  console.log("Valid URL")
} else {
  console.log("Invalid URL")
}


//? 6. LinkedIn Profile URL Validator.

const LinkedInUrlPattern = /^https:\/\/www.linkedin.com\/in\/[a-z-_A-Z0-9]{5,30}[0-9a-zA-Z]$/
const LinkdInurl = 'https://www.linkedin.com/in/vivek-parde-13956022b'
if (LinkedInUrlPattern.test(LinkdInurl)) {
  console.log("Valid LinkdIn URL")
} else {
  console.log("Invalid LinkdIn URL")
}
// Output: Valid LinkdIn URL
