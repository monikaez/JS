function toyShop(input){
//     1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
let priceCruiz = Number(input[0]);
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
let countOfPuzzels = Number|(input[1]);
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
let countOfSpeekDoly = Number|(input[2]);
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
let coutOfBeer = Number|(input[3]);
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
let countOfMinions = Number|(input[4]);
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
let countOfTrucks = Number|(input[5]);

const pricePuzzel = 2.60;
// •	Пъзел - 2.60 лв.
const priceDoly = 3;
// •	Говореща кукла - 3 лв.
const priceBear = 4.10;
// •	Плюшено мече - 4.10 лв.
const priceMinion = 8.20;
// •	Миньон - 8.20 лв.
const priceTruck =2;
// •	Камионче - 2 лв.
let totalPrice = (countOfPuzzels*pricePuzzel)+(countOfSpeekDoly*priceDoly)+(countOfMinions*priceMinion)+(countOfTrucks*priceTruck)+(coutOfBeer*priceBear);
let countAll = countOfMinions+countOfPuzzels+countOfSpeekDoly+countOfTrucks+coutOfBeer;
let moneyForRent = totalPrice*0.10;

let moneyLeft = totalPrice-moneyForRent;
if(countAll>=50){
    moneyLeft-=moneyLeft*0.25;
}

if(priceCruiz<=moneyLeft){
    console.log(`Yes! ${(moneyLeft-priceCruiz).toFixed(2)} lv left.`);
}else {
    console.log(`Not enough money! ${(priceCruiz-moneyLeft).toFixed(2)} lv needed.`);
}

}
toyShop(["40.8","20","25","30","50","10"]);
toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);
