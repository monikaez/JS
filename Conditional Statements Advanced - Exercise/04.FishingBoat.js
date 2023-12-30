function fishingBoat(input){
//     •	Бюджет на групата – цяло число в интервала [1…8000]
let budget = Number|(input[0]);
// •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
let season = input[1];
// •	Брой рибари – цяло число в интервала [4…18]
let count = Number|(input[2]);
let sum =0;

if (season === "Spring") {
    count <= 6? sum = 3000 * 0.9: count <= 11? sum = 3000 * 0.85: count >= 12? sum = 3000 * 0.75: null;
    count % 2 === 0? sum *= 0.95: null;
} else if (season === "Summer") {
    count <= 6? sum = 4200 * 0.9: count <= 11? sum = 4200 * 0.85: count >= 12? sum = 4200 * 0.75: null;
    count % 2 === 0? sum *= 0.95: null;
} else if (season === "Winter") {
    count <= 6? sum = 2600 * 0.9: count <= 11? sum = 2600 * 0.85: count >= 12? sum = 2600 * 0.75: null;
    count % 2 === 0? sum *= 0.95: null;
} else if (season === "Autumn") {
    count <= 6? sum = 4200 * 0.9: count <= 11? sum = 4200 * 0.85: count >= 12? sum = 4200 * 0.75: null;
}
budget >= sum ?
console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`) :
console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva.`)

}
fishingBoat(["3000","Summer","11"])