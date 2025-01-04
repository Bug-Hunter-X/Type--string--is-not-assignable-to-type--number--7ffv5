function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: Both parameters are numbers

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a) : a;
  const numB = typeof b === 'string' ? parseInt(b) : b;
  return numA + numB;
}

let result2 = addSafe(5, '10'); // Correct: uses type guarding and parseInt
let result3 = addSafe('5', 10); // Correct: uses type guarding and parseInt
let result4 = addSafe('5', '10'); //Correct: uses type guarding and parseInt