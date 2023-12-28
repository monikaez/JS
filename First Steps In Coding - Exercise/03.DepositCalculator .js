function depositCalculator(value){
let depositSum = Number(value[0]);
let depositEnd = Number|(value[1]);
let lihvenProcent = Number(value[2]);

let sum = depositSum + depositEnd * ((depositSum * (lihvenProcent/100))/12);
console.log(sum);
}
depositCalculator(["200 ","3 ","5.7 "]);
depositCalculator(["2350","6 ","7 "]);
//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)