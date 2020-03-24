export function getMaxDigit(number) {
  let result = 0;
  const numberStr =  String(number);
  for (let i = 0; i < numberStr.length; i++){
    if (result <= numberStr[i]){
      result = numberStr[i];
    }
  }
  return result;
}