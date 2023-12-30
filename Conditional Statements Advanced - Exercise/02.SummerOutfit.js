function summerOutfit(input) {
    //•	Градусите - цяло число в интервала [10…42]
    let degrees = Number(input[0]);
    //•	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
    let time = input[1];
    let outfit = '';
    let shoes = '';
    switch (time) {
        case "Morning":
            if (10 <= degrees && degrees <= 18) {
                outfit='Sweatshirt';
                shoes='Sneakers';
             
            } else if(18 < degrees&& degrees <= 24)
            {
                outfit='Shirt';
                shoes='Moccasins';
            }else{
                outfit='T-Shirt';
                shoes='Sandals';
            }
            break;
        case "Afternoon":
            if (10 <= degrees && degrees <= 18) {
                outfit='Shirt';
                shoes='Moccasins';
             
            } else if(18 < degrees&& degrees <= 24)
            {
                outfit='T-Shirt';
                shoes='Sandals';
            }else{
                outfit='Swim Suit';
                shoes='Barefoot';
            }
            break;

        case "Evening":

        if (10 <= degrees && degrees <= 18) {
            outfit='Shirt';
            shoes='Moccasins';
         
        } else if(18 < degrees&& degrees <= 24)
        {
            outfit='Shirt';
            shoes='Moccasins';
        }else{
            outfit='Shirt';
            shoes='Moccasins';
        }
        break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16","Morning"]);
summerOutfit(["22","Afternoon"]);

