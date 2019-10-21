// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = () => {
  let fibArr = [];
  const num1 = 1;
  const num2 = 1;

  fibArr.push(num1, num2)
  let newFib = fibArr[0] + fibArr[1]
  fibArr.push(newFib)
  let newFib2 = fibArr[1] + fibArr[2]
  fibArr.push(newFib2)
  let newFib3 = fibArr[2] + fibArr[3]
  fibArr.push(newFib3)
  let newFib4= fibArr[3] + fibArr[4]
  fibArr.push(newFib4)
  let newFib5 = fibArr[4] + fibArr[5]
  fibArr.push(newFib5)
  let newFib6 = fibArr[5] + fibArr[6]
  fibArr.push(newFib6)
  let newFib7 = fibArr[6] + fibArr[7]
  fibArr.push(newFib7)

  return fibArr
}
console.log(getFib());

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (arr) => {
  let newArr = arr.filter(x => {
    return x%2 != 0 && typeof x == 'number'
  })
  return newArr
}

console.log(oddChecker(fullArr1));
console.log(oddChecker(fullArr2));


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]



// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

const multTwo = (arr) => {
  return arr.map(x => x*2)
}
console.log(multTwo([3,4,5]))
console.log(multTwo([23, -9, 0]));
console.log(multTwo([4.5, -4.5, 12]));


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

const countL = (str) => {
  let count = 0;
  let newStr = str.split('')
  newStr.filter(x => {
    if (x == 'l' || x == 'L') {
      count++
    }
  })
  return count
}
console.log(countL(ourString));


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetter = (str) => {

  let middle, type

  if (str.length%2 != 0) {
    middle = str.length/2
    type = 1
  } else {
    middle = str.length/2-1
    type = 2
  }
  return str.substring(middle, middle + type)
    
}
console.log(middleLetter(middleLetters1));
console.log(middleLetter(middleLetters2));



// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

const sphere1 = {
  r: 5
}
const sphere2 = {
  r: 6
}
const sphere3 = {
  r: 7
}
const sphereA = (obj) => {
  let { r } = obj

  return 4 * 3.14 * (r * r)
}
console.log(sphereA(sphere1));
console.log(sphereA(sphere2));
console.log(sphereA(sphere3));


// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

let { doors, transmission } = myCar.specs
console.log(doors, transmission);


// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const adding = (firstNum, secondNum, thirdNum, fourthNum) => {
  let firstAdd = firstNum + secondNum
  let secondAdd = firstAdd + thirdNum
  let lastAdd = secondAdd + fourthNum

  return [firstNum, firstAdd, secondAdd, lastAdd]
}

const addArr = (arr) => {
  const compare = [];
  if (arr === compare) {
    return compare
  } else {
    return adding(arr[0], arr[1], arr[2], arr[3])
  }
}


console.log(addArr(numbersToAdd1));
console.log(addArr(numbersToAdd2));
console.log(addArr(numbersToAdd3));