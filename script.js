// Exercise : Copy and sort array
// Two phases : create a copy of the array, then sort that copy

let fifthExerciseArray = ["HTML", "JavaScript", "CSS"];
let newArray = fifthExerciseArray.slice();
newArray.sort();

// Exercise : Shuffle an array
// Create a function that randomly reorders elements of an array

let sixthExerciseArray = [1, 2, 3];

function randomize () {
  for (let i = 0; i < sixthExerciseArray.length; i++);
  return Math.random()
}

function shyffle () {
  return randomize(sixthExerciseArray).sort((a, b) => a - b);
}
// ChatGPT exercise

const allNumbers = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9];

function getEvenNumbers(arr) {
  let resultant = [];

  for (let number of allNumbers) {
  if (number % 2 != 0)
    resultant.push(number)
  }

return resultant;
}

console.log(getEvenNumbers(allNumbers));

// Another ChatGPT exercise

const givenNumbers = [1, 2, 3, 3, 5, 6, 7];

function tripleOddNumbers(brr) {
  let tripleResult = [];

  for (let given of givenNumbers) {
    if (given % 2 != 0 && !tripleResult.includes(given))
      given*3 && tripleResult.push(given)

    return tripleResult;
}
}

tripleOddNumbers(givenNumbers);

// Another ChatGPT exercise

const listofStrings = ["Magenta", "Ci", "Bleu", "Re", "Dragon"];

function filterLongStrings(crr) {
  let longStrings = []

  for (let element of crr) {
    if (typeof element == 'string') {
    if (element.length > 3) {
      longStrings.push(element);
      }
    }
  }
  return longStrings;
}

// Exercice ChatGPT : les variables intermédiaires (1)

function doublePositiveNumbers(arroyo) {
  let arroyoResult = []

  for (let carlos of arroyo) {
    if (carlos > 0 && !arroyoResult.includes(carlos*2)) {
      let doubleCarlos = carlos*2;
    arroyoResult.push(doubleCarlos)
  }
}
  return arroyoResult;
}

// Exercice ChatGPT : les variables intermédiaires (2)

function cleanAndFormatStrings(wade) {
  let lebron = []

  for (let dwyane of wade) {
    if (typeof dwyane == 'string') {
      let bosh = dwyane.trim().toLowerCase().replace(" ", "-");
      if (!lebron.includes(bosh)) {
        lebron.push(bosh)
      }
    }
  }
  return lebron;
}

const someItems = [" Hello World ", "hello  world", " test ", 35, "TEST"]
console.log(cleanAndFormatStrings(someItems));