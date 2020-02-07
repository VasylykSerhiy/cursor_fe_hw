const ress = document.querySelector('.result');

function getMaxDigit(number) {
  let result = 0;
  const numberStr =  String(number);
  for (let i = 0; i < numberStr.length; i++){
    if (result <= numberStr[i]){
      result = numberStr[i];
    }
  }
  return ress.innerHTML += (`The largest number in the list ${number}: ${result} <br>`);
}

function powNumber(number, step) {
  let result = number;
  for (let i = 1; i < step; i++){
    result *= number;
  }
  return ress.innerHTML += (`The number "${number}" in degree "${step}": ${result} <br>`);
}

function formatingLetter(name){
  let result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() ;
  return ress.innerHTML += (`Formatting "${name}": ${result} <br>`);
}

function amountTax(number) {
  let result = Math.round(Number(number) * (1 - 19.5 / 100));
  return  ress.innerHTML += (`The balance of the amount "${number}" after tax": ${result} <br>`);
}

function getRandomNumber (min , max){
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return ress.innerHTML += (`Random number in the range from ${min > max ? max : min} to ${min < max ? max : min} are: ${randomNumber} <br>`);
}

function countLetter (string, letter) {
  let result = 0;
  let stringLow = string.toLowerCase();
  let letterLow = letter.toLowerCase();
  
  for( let i = 0; i < stringLow.length; i++){
    if (stringLow[i] === letterLow){
      result++
    }
  }

  return ress.innerHTML += (`In the text "${string}" there are letters "${letter}": ${result} <br>`);;
}

function convertCurrency (amount){
  let result = ""; 
  let hrn = amount.slice(0, amount.length-3);
  let usd = amount.slice(0, amount.length-1);
  let amountLow = amount.toLowerCase();

  if(amountLow.indexOf("uah") != -1) {
    result = `Conversion from ${hrn} UAH to the rate of 25 UAH: ${hrn / 25}$ <br>`
  } else if(amountLow.indexOf("$") != -1 ){
    result = `Conversion from ${usd} UAH to the rate of 25 UAH:  ${usd * 25}₴ <br>`
  } else {
    result = "Error"
  };

  return ress.innerHTML += result;
}

function getRandomPassword(number) {
  console.log('number:', number)
  const lengthPass = number === 0 ? 8 : number;
  let password = ``;
  for (let i = 0; i < lengthPass; i++){
    password += (Math.floor(Math.random() * 10))
  }
  
  return ress.innerHTML += `Password is ${lengthPass} characters long: ${password} <br>`
}

function deleteLetters (string, letter) {
  let result = '';
  let stringLow = string.toLowerCase();
  let letterLow = letter.toLowerCase();
  
  for( let i = 0; i < stringLow.length; i++){
    if (stringLow[i] !== letterLow){
      result += string[i];
    }
  }

  return ress.innerHTML += (`All letters "${letter}" have been deleted in the text "${string}": ${result} <br>`);;
}

function isPalyndrom (text){
  const textLow = text.toLowerCase();
  const textRevers = textLow.split('').reverse().join('');
  result = textLow === textRevers;

  return  ress.innerHTML += `Is the word "${text}" a palindrome?: ${result ? 'Yes' : 'No'} <br>`
}

function deleteDuplicateLetter(text){
  const arr = text.split('');
  let debug = [];
  const result = arr.filter((item, i) => {
    debug.push({ item, i, indexOf: arr.indexOf(item)})
    return arr.indexOf(item) === arr.lastIndexOf(item)
  }).join('');
  
  return ress.innerHTML += `deletes all duplicate letters from the string: ${result} <br>`
}