// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let newString = string.split(' ');
  return newString;
}

// Desafio 4
function concatName(string) {
  // seu código aqui
  let concat = `${string[string.length - 1]}, ${string[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let teamPoints = (wins * 3) + ties;
  return teamPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let biggerNumber = Math.max(...numbers);
  let counter = 0;
  for (const number of numbers) {
    if (number === biggerNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Realizado consulta para a lógica deste requisito no vídeo, Link: https://www.youtube.com/watch?v=F26OCFOvMPU .
  const distanceFromCat1 = Math.abs(mouse - cat1);
  const distanceFromCat2 = Math.abs(mouse - cat2);
  if (distanceFromCat1 > distanceFromCat2) {
    return 'cat2';
  }
  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function isDivisibleByThree(number) {
  return number % 3 === 0;
}

function isDivisibleByFive(number) {
  return number % 5 === 0;
}

function isDivisibleByBoth(number) {
  return isDivisibleByThree(number) && isDivisibleByFive(number);
}

function getBuzz(number) {
  if (isDivisibleByBoth(number)) {
    return 'fizzBuzz';
  }
  if (isDivisibleByThree(number)) {
    return 'fizz';
  }
  if (isDivisibleByFive(number)) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  // seu código aqui
  let newNumbers = [];
  for (const number of numbers) {
    newNumbers.push(getBuzz(number));
  }
  return newNumbers;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let newPhrase = phrase;

  newPhrase = newPhrase.replace(/a/g, '1');
  newPhrase = newPhrase.replace(/e/g, '2');
  newPhrase = newPhrase.replace(/i/g, '3');
  newPhrase = newPhrase.replace(/o/g, '4');
  newPhrase = newPhrase.replace(/u/g, '5');

  return newPhrase;
}

function decode(phrase) {
  // seu código aqui
  let newPhrase = phrase;

  newPhrase = newPhrase.replace(/1/g, 'a');
  newPhrase = newPhrase.replace(/2/g, 'e');
  newPhrase = newPhrase.replace(/3/g, 'i');
  newPhrase = newPhrase.replace(/4/g, 'o');
  newPhrase = newPhrase.replace(/5/g, 'u');

  return newPhrase;
}

// Desafio 10
function techList(list, name) {
  // seu código aqui
  if (list.length === 0 || name === '') {
    return 'Vazio!';
  }
  let orderedTechnologies = list.sort();
  let technologyWithName = [];

  for (const tech of orderedTechnologies) {
    technologyWithName.push({
      tech,
      name,
    });
  }
  return technologyWithName;
}

