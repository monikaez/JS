function suppliesforSchool(value){
    // •	Брой пакети химикали - цяло число в интервала [0...100]
    let countPaketPen = Number|(value[0]);
    // •	Брой пакети маркери - цяло число в интервала [0...100]
    let countPaketMarker = Number|(value[1]);
    // •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
    let litrPreparat = Number|(value[2]);
    // •	Процент намаление - цяло число в интервала [0...100]
    let percentDisc = Number|(value[3]);
    const pricePen = 5.80;
    const priceMarker = 7.20;
    const pricePreparat = 1.20;

    let totalSum = ((countPaketPen*pricePen)+(countPaketMarker*priceMarker)+(litrPreparat*pricePreparat));
    let finalSum = totalSum-totalSum*(percentDisc/100);
    console.log(finalSum);
   
} 
suppliesforSchool(["2 ","3 ","4 ","25 "]);
//•	Пакет химикали - 5.80 лв. 
//•	Пакет маркери - 7.20 лв. 
//•	Препарат - 1.20 лв (за литър)

