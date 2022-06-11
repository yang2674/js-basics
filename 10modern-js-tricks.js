// https://betterprogramming.pub/10-modern-javascript-tricks-every-developer-should-use-377857311d79

// 1. Conditionally Add Properties to Object
//  ...(condition && {prop: value})

const angry = true //false
let color = 'Green'

const greenAvenger = {
  Age: 49,
  Height: '5\'9',
  Weight: '128lbs',
  'Who Am I?': 'Bruce Banner, M.D., Ph.D.',
  [color]: false,

  ...(angry && {
    Age: 13,
    Height: '7\'8\'',
    Weight: '1,400 lbs',
    'Who Am I?': 'The Hulk',
    [color]: true
  })
};

console.log(greenAvenger);

// 2. Check if a Property Exists in an Object
// ('prop' in object)

// const person = { name: 'John Doe', salary: 1000 };
// console.log('salary' in person); // returns true
// console.log('age' in person); // returns false
console.log(`Does \'Age\' exist in greenAvenger:`, 'Age' in greenAvenger); //true
console.log(`Does \'Green\' exist in greenAvenger:`, 'green' in greenAvenger); //false

// 3. Dynamic Property Names in Objects
// let variable = whatever; [variable]: 'value'

// const dynamic = 'flavour';
// let item = {
//   name: 'Biscuit',
//   [dynamic]: 'Chocolate'
// }
// console.log(item); // { name: 'Biscuit', flavour: 'Chocolate' }
console.log(greenAvenger); // [color: 'green']

// 4. Object Destructuring With a Dynamic Key

// const {prop: value} = obj
// console.log(value);

// const person = { id: 1, name: 'John Doe' };
// const { name: personName } = person;
// console.log(personName); // returns 'John Doe'
const { Age: number } = greenAvenger;
console.log(number); //49, if angry is false //13, if angry is true