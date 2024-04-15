// task2 Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

let number = +prompt("Eded yazin");
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(`${number} bolenleri: ${i}`);
  }
}


// task3 Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

let eded,
  count= 0;
eded = +prompt("Ededi yazin");
for (let i = 1; i <= eded; i++) {
  if (eded % i == 0) {
    count++;
  }
}
console.log(`Daxil etdiyiniz ${eded} ededin bolenlerin sayi ${count}`);



// task 6   0 - 100 arası yalnız sadə ədədləri console'da çap edin

for (let i = 1; 
    i < 100;
     i += 2) {
    console.log(i);
  }




// task15  daxil edilən ədədin kvadratını return edən funksiya yazın

let numbe = +prompt("ededi yazin ");

function square(numbe) {
  return Math.pow(numbe, 2);
}

console.log(square(numbe));

// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

let sumOfPrices = 0;
for (let i = 0; i < products.length; i++) {
  sumOfPrices += products[i].price;
}

console.log("SUM: ", sumOfPrices);
console.log("AVERAGE: ", sumOfPrices / products.length);

