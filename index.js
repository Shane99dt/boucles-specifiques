// Ex 1

// const array = [1, 2, 3, 4, 5]

// const double = array.map( x => x*2);
// console.log(double)

// Ex 2

// const longNames = [
//   {
//     firstName: "Jane",
//     lastName: "Doe"
//   },
//   {
//     firstName: "John",
//     lastName: "Smith"
//   }
// ]

// const shortNames = longNames.map(
//   ({firstName, lastName}) => ({["name"] :  firstName + " " + lastName})
// )

// console.log(shortNames)


// Ex 3

// const array2 = [1, "toto", 34, "javascript", 8]

// const numbers = array2.filter( num => typeof(num) == "number")

// console.log(numbers)

// Ex 4

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const even = numbers.filter(num => num % 2 == 0)

// console.log(even)

// Ex 5

const cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const cakesSoldOut = cakes.filter(
  cake => (cake.name == "donut" || cake.name == "brownie")
).map(
  stat => {
    const obj = Object.assign({}, stat)

  }
)

console.log(cakesSoldOut)



// return schools.map(item => {
//   var temp = Object.assign({}, item);
//   if (temp.name === oldName) {
//       temp.name = name;
//   }
//   return temp;
// });


// Ex 6

const pieDisplay = cakes.filter(
  (cake, i) => (cake.name == "pie")
)

console.log(pieDisplay)

// need to display the element


// Ex 7






// Ex 8

// const array3 = [1, 2]


// array3.forEach((item, i) => {
//   console.log("[ ]")

//   array3.forEach((item, i) => {
//     console.log("[x]")
//   })
// }
// )
