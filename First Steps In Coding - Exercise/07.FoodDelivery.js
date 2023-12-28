function foodDelivery(value){
    // •	Пилешко меню –  10.35 лв. 
    const chickenMenu = 10.35;
    // •	Меню с риба – 12.40 лв. 
    const fishMenu = 12.40;
    // •	Вегетарианско меню  – 8.15 лв. 
    const vegetarMenu = 8.15;
//     •	Брой пилешки менюта – цяло число в интервала [0 … 99]
let countChickenMenues = Number|(value[0]);
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
let countFishMenues = Number|(value[1]);
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]
let countVegetarMenues = Number|(value[2]);

let sumGroupFood = (chickenMenu*countChickenMenues)+(fishMenu*countFishMenues)+(vegetarMenu*countVegetarMenues);

let priceDesert = sumGroupFood*0.20;
const priceDelivery =2.50;
let totalSumForPay = sumGroupFood+priceDesert+priceDelivery;

console.log(totalSumForPay);
  
}
foodDelivery(["2 ","4 ","3 "]);