
function bonusScore(input) {
    let num = Number(input[0])
    let bonus = 0;
    n <= 100 ? bonus = 5 : n <= 1000 ? bonus = n * 0.2 : n > 1000 ? bonus = n * 0.10 : null;
    n % 2 === 0 ? bonus += 1 : n % 10 === 5 ? bonus += 2 : null;
    console.log(bonus);
    console.log(num + bonus);
}

bonusScore(["2703"]);
// •	Ако числото е до 100 включително, бонус точките са 5.
// •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
