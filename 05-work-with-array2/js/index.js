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
    const getRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
    result.push(getRandomNumber);
  }
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
  return biggestKey
}

const getAverage = (...numbers) => {
  const arrIntegerNumber = integerNumber(getData(...numbers))
  const average = (arrIntegerNumber.reduce((acc, number) => {
    (acc += number)
    return acc
  },0) / arrIntegerNumber.length).toFixed(3)
 
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
  return result 
}

const filterEvenNumbers = (...numbers) => getData(...numbers).filter(item => item % 2 === 0);

const countPositiveNumbers = (...numbers) => (getData(...numbers).filter(item => item > 0)).length

const getDividedByFive = (...numbers) => getData(...numbers).filter(item => item % 5 === 0)

const replaceBadWords = (string) => {
  const badWords = /shit|fuck/i;
  return string.replace(badWords, '****')
}

const divideByThree = (string) => {
  const arrString = string.split(' ')
  const result = [];
  arrString.map(item => {
    for (let i = 0; i < item.length; i+=3) {
      result.push(item.slice(i, i + 3));
    }
  })
  return result
} 
