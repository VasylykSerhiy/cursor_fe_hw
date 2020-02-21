const ress = document.querySelector('.result');

const runGetMyTaxes = () => {
  const salary = Number(prompt('Enter amount', 1000)) 
  const country = document.getElementById("taxSelect").value;
  
  ress.innerHTML += `You will pay in ${country} => ${getMyTaxes.call(eval(country), salary)} <br>`
}

const runGetMiddleTaxes = () => {
  const country = document.getElementById("midl-tax").value;
  ress.innerHTML += `Pay taxes on average in ${country} => ${getMiddleTaxes.call(eval(country))} <br>`
}


const runGetTotalTaxes = () => {
  const country = document.getElementById("total-tax").value;
  ress.innerHTML += `Total tax paid in ${country} => ${getTotalTaxes.call(eval(country))} <br>`
}


const runGetMySalary = () => {
  const country = document.getElementById("my-salary").value;
  getMySalary.call(eval(country), String(country))
}

