function radianstoDegrees(value) {
let radian = Number(value[0]);

let degree = (radian*180)/Math.PI;
console.log(degree);

}
//: градус = радиан * 180 / π
radianstoDegrees(["3.1416"]);