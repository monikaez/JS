function lunchBreak(input){
    //1.	Име на сериал – текст
    let name = input[0];
    //2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
    let epTime = Number(input[1]);
    //3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
    let lunchBreak = Number(input[2]);

    let time = lunchBreak - ((lunchBreak * 1 / 8) + (lunchBreak * 1 / 4));
    time >= epTime? console.log(`You have enough time to watch ${name} and left with ${Math.ceil(time - epTime)} minutes free time.`):
    console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(epTime - time)} more minutes.`);
}
lunchBreak(["Game of Thrones","60","96"]);

