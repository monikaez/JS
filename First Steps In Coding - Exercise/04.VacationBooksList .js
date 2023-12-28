function vacationBooksList(value) {
    let countStrInCurrBook = Number | (value[0]);
    let countStrForOneHour = Number | (value[1]);
    let countOfDays = Number | (value[2]);
    let finalResulReading = (countStrInCurrBook / countStrForOneHour) / countOfDays;

    console.log(finalResulReading);
}
vacationBooksList(["212 ", "20 ", "2 "]);