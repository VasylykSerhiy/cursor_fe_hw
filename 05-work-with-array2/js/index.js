const ress = document.querySelector('.result');

const getData = (data) => { return  result = data.split(' ') }
const integerNumber = (arr) => {
  const integer = [];
  for(let i = 0; i < arr.length; i++){
    if(Number.isInteger(Number(arr[i]))){
      integer.push(Number(arr[i]))
    }
  }
  return integer
}


const getRandomArray = (length, min, max) =>{
  const result = [];
  for(let i = 0; i < length; i++ ){
    let getRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
    result.push(getRandomNumber);
  }
  ress.innerHTML += (`${length} numbers from ${min} to ${max} in the array : [${result}] <br>`)
  return result;
}

const getModa = (...numbers) => {
  const arrIntegerNumber = integerNumber(getData(...numbers))
  const res = arrIntegerNumber.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  },{})

  let maxNumber = 0;
  let biggestKey = '';
  for (let key in res) {
    if(res[key] > maxNumber ){
      maxNumber = res[key];
      biggestKey = key;
    
    } else if(res[key] === maxNumber){
      maxNumber = res[key];
      biggestKey += ` ${key}`;
    }
  }

  ress.innerHTML += (`Mode from the numbers ${numbers}-> ${biggestKey} <br>`)
  return biggestKey
}


const getAverage = (...numbers) => {
  const arrIntegerNumber = integerNumber(getData(...numbers))
  const average = (arrIntegerNumber.reduce((acc, number) => {
    (acc += number)
    return acc
  },0) / arrIntegerNumber.length).toFixed(3)
 
  ress.innerHTML += (`The arithmetic mean of the numbers ${numbers} -> ${average} <br>`)
  return average
}


const getMedian = (...numbers) => {
  const arrIntegerNumber = integerNumber(getData(...numbers)).sort((a, b) => a - b)
  let result = null;
  if( arrIntegerNumber.length % 2 !== 0){
    result = arrIntegerNumber[Math.floor(arrIntegerNumber.length / 2)];
  } else {
    result = (arrIntegerNumber[(arrIntegerNumber.length / 2 - 1)] + arrIntegerNumber[(arrIntegerNumber.length / 2)]) / 2
  }
  ress.innerHTML += (`The arithmetic mean of the numbers ${arrIntegerNumber} -> ${result} <br>`)
  return result 
}

getMedian('4 6 2 9 4')