let startingNumber = Number(prompt("Enter the start number", "10"));

while (!Number.isInteger(startingNumber)){
  alert(`ERROR! \nThe string does not match the required number!!!`)
  startingNumber = Number(prompt("Enter the start number", "10"));
}

let finiteNumber = Number(prompt("Enter the finite number", "100"));
while (!Number.isInteger(finiteNumber)){
  alert(`ERROR! \nThe string does not match the required number!!!`)
  finiteNumber = Number(prompt("Enter the finite number", "100"));
}

let summa = 0;

if(startingNumber > finiteNumber){
  while(startingNumber > finiteNumber){
    alert(`ERROR! \nThe first number cannot be greater than the second!!!`)
    startingNumber = Number(prompt("Enter the start number", "10"));
    finiteNumber = Number(prompt("Enter the finite number", "100"));
  }
} else if (startingNumber === finiteNumber){
  while(startingNumber === finiteNumber){
    alert(`ERROR! \nThe numbers cannot be equal!!!`)
    startingNumber = Number(prompt("Enter the start number", "10"));
    finiteNumber = Number(prompt("Enter the finite number", "100"));
  }
}

const evenNumber = confirm('Skip even numbers?');

for (let i = startingNumber; i <= finiteNumber; i++) {
  if(evenNumber){
    if(i % 2 !== 0){
      summa += i
    }
  } else(
    summa += i
  )
}
document.writeln(`
The first number: ${startingNumber} <br>
The second number: ${finiteNumber} <br>
Missing even numbers? ${evenNumber === true ? "Yes" : "No"} <br>
The result of the sum of numbers from ${startingNumber} to ${finiteNumber}: <b>${summa}</b>
`)