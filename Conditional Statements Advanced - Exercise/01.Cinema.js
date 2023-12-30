function cinema(input){
    //тип прожекция (стринг), брой редове и брой колони в залата (цели числа) 
    let projection = input[0];
    let countLength = Number(input[1]);
    let countWidth = Number(input[2]);
//•	Premiere – премиерна прожекция, на цена 12.00 лева.
    projection === "Premiere" ? console.log(`${(countLength*countWidth*12.00).toFixed(2)} leva`):
    //•	Normal – стандартна прожекция, на цена 7.50 лева
    projection === "Normal" ? console.log(`${(countLength*countWidth*7.50).toFixed(2)} leva`):
    //•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
    projection === "Discount" ? console.log(`${(countLength*countWidth*5.00).toFixed(2)} leva`): null;
}
cinema(["Discount", "12", "30"])