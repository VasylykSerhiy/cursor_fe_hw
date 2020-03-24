export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

export function getMyTaxes (salary) {
  return salary * this.tax
}