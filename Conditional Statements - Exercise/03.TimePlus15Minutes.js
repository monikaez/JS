function timePlusMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let total = hours * 60 + minutes + 15;
    hours = Math.floor(total / 60);
    if (hours > 23) {
        hours = 0;
    } else {
        hours = hours;
    }
    minutes = total % 60;

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
timePlusMinutes(["1", "46"]);
timePlusMinutes(["0", "01"]);