function getMaxDigit(number) {
  let result = 0;
  const numberStr =  String(number);
  for (let i = 0; i < numberStr.length; i++){
    if (result <= numberStr[i]){
      result = numberStr[i];
    }
  }
  return result;
}
console.log(`Func 1: The largest number in the list 192837465: ${getMaxDigit('192837465')}`);


function powNumber(number, step) {
  let result = number;

  if(step === 0){
    result = 1
  } else {
    for (let i = 1; i < step; i++){
      result *= number;
    }
  }
  return result;
}
console.log(`Func 2: The number "3" in degree "3": ${powNumber('3', '3')}`)


function formatingLetter(name){result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
console.log(`Func 3: Formatting "iVaN": ${formatingLetter('iVaN')}`)


function amountTax(number) {
  const percentageTax = 19.5;
  return Math.round(Number(number) * (1 -  percentageTax / 100));
}
console.log(`Func 4: The balance of the amount "1000" after tax": ${amountTax('1000')} <br>`)


function getRandomNumber (min , max){
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(`Func 5: Random number in the range from "1" to "10" are: ${getRandomNumber (1 , 10)}`)

function countLetter (string, letter) {
  let result = 0;
  const stringLow = string.toLowerCase();
  const letterLow = letter.toLowerCase();
  
  for( let i = 0; i < stringLow.length; i++){
    if (stringLow[i] === letterLow){
      result++
    }
  }
  return result;
}
  console.log(`Func 6: In the text "Enter text" there are letters "e": ${countLetter('Enter text', 'e')}`);


function convertCurrency (amount){
  let result = ""; 
  let hrn = amount.slice(0, amount.length-3);
  let usd = amount.slice(0, amount.length-1);
  let amountLow = amount.toLowerCase();

  if(amountLow.indexOf("uah") != -1) {
    result = `Conversion from ${hrn} UAH to the rate of 25 UAH: ${hrn / 25}$`
  } else if(amountLow.indexOf("$") != -1 ){
    result = `Conversion from ${usd} UAH to the rate of 25 UAH:  ${usd * 25}₴`
  } else {
    throw new Error('something went wrong!')
  };
  return result;
}

console.log( `Func 7: ${convertCurrency('1000UAH')}`);
console.log( `Func 7: ${convertCurrency('100$')}`);

function getRandomPassword(number) {
  const lengthPass = number === 0 ? 8 : number;
  let password = ``;
  for (let i = 0; i < lengthPass; i++){
    password += (Math.floor(Math.random() * 10))
  }

  return password;
}
console.log(`Func 8: Password is "7" characters long: ${getRandomPassword('7')}`)


function deleteLetters (string, letter) {
  let result = '';
  let stringLow = string.toLowerCase();
  let letterLow = letter.toLowerCase();
  
  for( let i = 0; i < stringLow.length; i++){
    if (stringLow[i] !== letterLow){
      result += string[i];
    }
  }
  return result;
}
console.log(`Func 9: All letters "e" have been deleted in the text "Enter text": ${deleteLetters("Enter text", 'e')}`);

function isPalyndrom (text){
  const textLow = text.toLowerCase();
  const textRevers = textLow.split('').reverse().join('');
  result = textLow === textRevers;
  return  result
}
console.log(`Func 10: Is the word "madam" a palindrome?: ${isPalyndrom ('madam')}`)

function deleteDuplicateLetter(text){
  const arr = text.toLowerCase().split('');
  let debug = [];
  const result = arr.filter((item, i) => {
    debug.push({ item, i, indexOf: arr.indexOf(item)})
    return arr.indexOf(item) === arr.lastIndexOf(item)
  }).join('');
  
  return result
}

console.log(`deletes all duplicate letters from the string: ${deleteDuplicateLetter('Бисквит был очень нежный')} <br>`)
