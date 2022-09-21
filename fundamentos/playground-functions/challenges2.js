// Desafio 11
function checkSize(numbers) {
  if (numbers.length !== 11) {
    return false;
  }
  return true;
}

function checkValues(numbers) {
  for (const number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function checkRepeatedNumber(numbers) {
  const repeatedNumbersCounters = {};

  for (const number of numbers) {
    if (!repeatedNumbersCounters[number]) {
      repeatedNumbersCounters[number] = 0;
    }
    repeatedNumbersCounters[number] += 1;
    if (repeatedNumbersCounters[number] >= 3) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  if (!checkSize(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkValues(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (!checkRepeatedNumber(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const ddd = numbers.slice(0, 2).join('');
  const firstNumbers = numbers.slice(2, 7).join('');
  const lastNumbers = numbers.slice(7, 11).join('');
  const numberTelephone = `(${ddd}) ${firstNumbers}-${lastNumbers}`;
  return numberTelephone;
}

// Desafio 12
function checkFirstCondition(a, b, c) {
  if (a > (b + c)) {
    return false;
  }
  if (b > (a + c)) {
    return false;
  }
  if (c > (a + b)) {
    return false;
  }
  return true;
}
function checkSecondCondition(a, b, c) {
  if (a < Math.abs(b - c)) {
    return false;
  }
  if (b < Math.abs(a - c)) {
    return false;
  }
  if (c < Math.abs(b - a)) {
    return false;
  }
  return true;
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (!checkFirstCondition(lineA, lineB, lineC)) {
    return false;
  }
  if (!checkSecondCondition(lineA, lineB, lineC)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(input) {
  // seu código aqui
  const totalSum = [...input.matchAll(/\d+/g)]
    .map((result) => parseInt(result[0], 10))
    .reduce((sum, curr) => sum + curr, 0);

  return `${totalSum} copo${totalSum > 1 ? 's' : ''} de água`;
}
