const ress = document.querySelector('.result');
const getData = (data) => { return  result = data.split(' ') }

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
  const integer = [];
  const arrNumber = getData(...numbers)
  for(let i = 0; i < arrNumber.length; i++){
    if(Number.isInteger(Number(arrNumber[i]))){
      integer.push(arrNumber[i])
    }
  }
  console.log(integer);
  const res = integer.reduce((acc, el) => {
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
  

  ress.innerHTML += (`Mode from the numbers ${numbers}: ${biggestKey} <br>`)
  return biggestKey
}


