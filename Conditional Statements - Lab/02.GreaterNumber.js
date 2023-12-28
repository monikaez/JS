function greaterNumber(value) {
    let numberOne = Number | (value[0]);
    let numberTwo = Number | (value[1]);
    if (numberOne > numberTwo) {
        console.log(numberOne);
    }
    else {
        console.log(numberTwo);
    }
}

greaterNumber(["5", "3"]);