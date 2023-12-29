function shopping(input){
//     1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
let budgetPetar = Number(input[0]);
// 2.	Броят видеокарти - цяло число в интервала [0…100]
let countVideoCards= Number(input[1]);
// 3.	Броят процесори - цяло число в интервала [0…100]
let countCPU = Number(input[2]);
// 4.	Броят рам памет - цяло число в интервала [0…100]
let countRAM = Number(input[3]);
// •	Видеокарта – 250 лв./бр.
let priceVideoCard=250;
// •	Процесор – 35% от цената на закупените видеокарти/бр.
let priceCPU = 0.35*priceVideoCard*countVideoCards;
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
let priceRam = 0.1*priceVideoCard*countVideoCards;
//let price = (videoCards * 250) + ((videoCards * 250) * 0.35 * CPU) + 
//((videoCards * 250) * 0.1 * RAM);
let priceAll = countVideoCards*priceVideoCard+countCPU*priceCPU+countRAM*priceRam;
if(countVideoCards>countCPU){
    priceAll *=0.85;
}

if(budgetPetar>=priceAll){
    console.log(`You have ${(budgetPetar-priceAll).toFixed(2)} leva left!`);
}else{
console.log(`Not enough money! You need ${(priceAll-budgetPetar).toFixed(2)} leva more!`)
}
}
shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);

