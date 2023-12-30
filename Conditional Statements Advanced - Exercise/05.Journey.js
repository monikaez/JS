function journey(input) {
  //•	Първи– Бюджет, реално число в интервала [10.00...5000.00].
  let budget = Number(input[0]);
//  •	Втори–  Един от двата възможни сезона: "summer" или "winter"
let season = input[1];
let price = 0;
    let where = '';
    let place = '';
    budget <= 100 ? season === 'summer' ? (price = budget * 0.3, where = 'Bulgaria', place = 'Camp') : (price = budget * 0.7, where = 'Bulgaria', place = 'Hotel') : null;
    budget > 100 && budget <= 1000 ? season === 'summer' ? (price = budget * 0.4, where = 'Balkans', place = 'Camp') : (price = budget * 0.8, where = 'Balkans', place = 'Hotel') : null;
    budget > 1000 ? season === 'summer' ? (price = budget * 0.9, where = 'Europe', place = 'Hotel') : (price = budget * 0.9, where = 'Europe', place = 'Hotel') : null;
    console.log(`Somewhere in ${where}\n${place} - ${price.toFixed(2)}`);
  }
  journey(["1001", "winter"])