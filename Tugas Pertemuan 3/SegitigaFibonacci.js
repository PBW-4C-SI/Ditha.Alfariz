function SegitigaFibonacci(n){
  let fibonacci = [0, 1];

  for (let i = 2; i < n *(n + 1)/2 ; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
  let index = 0;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j< i; j++) {
      row += fibonacci[index] + " ";
      index++;
    }
    console.log(row);
  }
}

SegitigaFibonacci(10);