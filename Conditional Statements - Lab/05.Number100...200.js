function  numberfrom100To200(velue){
    let num = Number(velue[0]);
    num < 100 ? console.log(`Less than 100`) : num <= 200 ? console.log(`Between 100 and 200`) : num > 200 ? console.log(`Greater than 200`) : null;
}

numberfrom100To200(["95"]);

// •	под 100 отпечатайте: "Less than 100"
// •	между 100 и 200 отпечатайте: "Between 100 and 200"
// •	над 200 отпечатайте: "Greater than 200"
