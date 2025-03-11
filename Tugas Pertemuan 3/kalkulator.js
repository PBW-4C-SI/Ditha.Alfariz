function kalkulator(operator){
  let num1 = 3;
  let num2 = 5;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Harus memasukan angka";
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return "Error: tidak bisa dibagi dengan 0";
      }
      result = num1 / num2;
      break;
  
    default:
      break;
  }
  return result;
}

console.log(kalkulator('+'));
console.log(kalkulator('-'));
console.log(kalkulator('*'));
console.log(kalkulator('/'));
