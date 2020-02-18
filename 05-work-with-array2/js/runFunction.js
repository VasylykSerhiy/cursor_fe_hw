const ress = document.querySelector('.result');

const runGetRandomArray = (length, min, max) =>{
  ress.innerHTML += (`${length} numbers from ${min} to ${max} in the array : [${getRandomArray(length, min, max)}] <br>`)
}

const runGetModa = (...numbers) =>{
  ress.innerHTML += (`Mode from the numbers ${numbers}-> ${getModa(...numbers)} <br>`)
}

const runGetAverage = (...numbers) => {
  ress.innerHTML += (`The arithmetic mean of the numbers ${numbers} -> ${getAverage(...numbers)} <br>`)

}

const runGetMedian = (...numbers) => {
  ress.innerHTML += (`The arithmetic mean of the numbers ${numbers} -> ${getMedian(...numbers)} <br>`)
}

const runFilterEvenNumbers = (...numbers) => {
  ress.innerHTML += `Even numbers from ${numbers} => ${filterEvenNumbers(...numbers)} <br>`
}

const runCountPositiveNumbers = (...numbers) =>{
  ress.innerHTML += `In ${numbers} more than 0 => ${countPositiveNumbers(...numbers)}<br>`
}

const runGetDividedByFive = (...numbers) => {
  ress.innerHTML += `Among ${numbers} divide by 5 => ${getDividedByFive(...numbers)} <br>`
}

const runReplaceBadWords = (string) =>{
  ress.innerHTML += `${string} => ${replaceBadWords(string)} <br>`
} 

const runDivideByThree = (string) =>{
  ress.innerHTML += `${string} => ${divideByThree(string)} <br>`

} 