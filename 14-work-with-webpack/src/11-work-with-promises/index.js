const getRandomChinese = async (length) => {
  let result = '';

  for (let i = 0; i < length; i++){
    const randomSymbol = new Promise(resolve => {
      setTimeout(() => {
        let sign = String(Date.now())
        sign = sign.substring(sign.length - 5)
        resolve(String.fromCharCode(sign));
      }, 50);
    });

    await randomSymbol.then((symbol) => {
      result += symbol
    })
  }

  console.log(result)
  return result
}


export const startGetRandomChinese = async () => {
  const ress = document.querySelector('.result');
  const length = Number(prompt('Enter number', 5)) 
  
  ress.innerHTML = ` ${await getRandomChinese(length)} `
}
