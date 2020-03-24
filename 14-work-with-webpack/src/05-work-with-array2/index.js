const getData = (data) => data.split(' ') 
const integerNumber = (arr) => {
  const integer = [];
  for(let i = 0; i < arr.length; i++){
    if(Number.isInteger(Number(arr[i]))){
      integer.push(Number(arr[i]))
    }
  }
  return integer
}

export const getModa = (...numbers) => {
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