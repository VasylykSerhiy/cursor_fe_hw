const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes (salary) {
  return salary * this.tax
}

function getMiddleTaxes () {
  return this.middleSalary * this.tax
}

function getTotalTaxes () {
  return this.middleSalary * this.tax * this.vacancies
}

function getMySalary (strCountry) {
  const self = this;
  const minSalary = 1500;
  const maxSalary = 2000;
  const result = {}

  interval = setInterval(function(){ 
    const getRandomSalary  = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary; 
    const taxes = getRandomSalary * self.tax
    const profit = getRandomSalary - taxes
    
    result.salary = getRandomSalary,
    result.taxes = taxes,
    result.profit = profit
    console.log(strCountry,': ', result);
    return result
   }, 1000);

   document.getElementById('stop-interval').addEventListener("click",function() {
    clearInterval(interval);
   })
}



