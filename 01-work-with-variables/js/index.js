const ananas = 15.678,
      orange = 123.965,
      mango = 90.2345;

const maxPrice = Math.max(ananas, orange, mango);
console.log(`Максимальная цена: ${maxPrice}`);
document.writeln(`Максимальная цена: ${maxPrice} </br>`);

const minPrice = Math.min(ananas, orange, mango);
console.log(`Минимальная цена: ${minPrice}`);
document.writeln(`Минимальная цена: ${minPrice} </br>`);

const sumPrice = ananas + orange + mango;
console.log(`Cумма всех товаров: ${sumPrice}`);
document.writeln(`Cумма всех товаров: ${sumPrice} </br>`);

const sumPriceFloor =  Math.floor(ananas) + Math.floor(orange) + Math.floor(mango);
console.log(`Cумма целой части всех товаров: ${sumPriceFloor}`);
document.writeln(`Cумма целой части всех товаров: ${sumPriceFloor} </br>`);

const sumPriceRound =  Math.round( sumPrice / 100) * 100;
console.log(`Cуммa товаров округленную до сотен: ${sumPriceRound}`);
document.writeln(`Cуммa товаров округленную до сотен: ${sumPriceRound} </br>`);

const remainderPrice = (Math.floor(sumPrice) % 2) == 0;
console.log(`Булевое значение: ${remainderPrice}`);
document.writeln(`Булевое значение: ${remainderPrice} </br>`);

const magicNumber = 500;
const surrender = magicNumber - sumPrice;
console.log(`Cумма сдачи, при оплате всех товаров: ${surrender}`);
document.writeln(`Cумма сдачи, при оплате всех товаров: ${surrender} </br>`);

const midl = (sumPrice / 3).toFixed(2);
console.log(`Cреднее значение цен: ${midl}`);
document.writeln(`Cреднее значение цен: ${midl} </br>`);

const discount = (Math.random() * 100).toFixed(0),
      discountAnanas = (ananas * (1 - discount / 100)).toFixed(2);
      discountOrange = (orange * (1 - discount / 100)).toFixed(2);
      discountMango = (mango * (1 - discount / 100)).toFixed(2);

console.log(`Cумма к оплате за ananas со скидкой ${discount}%: ${discountAnanas}`);
console.log(`Cумма к оплате за orange со скидкой ${discount}%: ${discountOrange}`);
console.log(`Cумма к оплате за mango со скидкой ${discount}%: ${discountMango}`);

document.writeln(`Cумма к оплате за ananas со скидкой ${discount}%: ${discountAnanas}  </br>`);
document.writeln(`Cумма к оплате за orange со скидкой ${discount}%: ${discountOrange}  </br>`);
document.writeln(`Cумма к оплате за mango со скидкой ${discount}%: ${discountMango}  </br>`);

const notPaidAnanas = ananas - discountAnanas,
      lostProfitAnanas = (ananas / 2 - notPaidAnanas).toFixed(2),

      notPaidOrange = orange - discountOrange,
      lostProfitOrange = (orange / 2 - notPaidOrange).toFixed(2),

      notPaidMango = mango - discountMango,
      lostProfitMango = (mango / 2 - notPaidMango).toFixed(2);

console.log(`Упущенная выгода ananas: ${lostProfitAnanas}`);
console.log(`Упущенная выгода orange: ${lostProfitOrange}`);
console.log(`Упущенная выгода mango: ${lostProfitMango}`);

document.writeln(`Упущенная выгода ananas: ${lostProfitAnanas} </br>`);
document.writeln(`Упущенная выгода orange: ${lostProfitOrange} </br>`);
document.writeln(`Упущенная выгода mango: ${lostProfitMango} </br>`);