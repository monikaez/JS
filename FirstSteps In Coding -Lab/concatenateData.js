//"You are <firstName> <lastName>, a <age>-years old person from <town
function concatenateData(person){
    //let  person = [firstName,lastName,age,town];
    let firstName = person[0];
    let lastName = person[1];
    let age = Number(person[2]);
    let town = person[3];
   console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(["Mari","Pepe",20,"Sofia"]);


