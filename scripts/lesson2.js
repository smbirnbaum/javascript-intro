let priceTag = prompt("Enter a price tag:");
let priceWithoutDollar = priceTag.slice(1);
let priceNumber = parseFloat(priceWithoutDollar);
let discount = priceNumber * 0.10;
let newPrice = priceNumber - discount;

console.log("Your new price is: $" + newPrice);