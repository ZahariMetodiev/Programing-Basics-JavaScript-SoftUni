function theatrePromotions(dayType, age) {

let price = 0;

    if(age < 0 || age > 122){
        console.log("Error!");
        return;
    }

    switch (dayType) {
        case 'Weekday':
        if (age >= 0 && age <= 18) {
            price = 12;
        }else if (age <= 64) {
            price = 18;
        }else if(age <= 122){
            price = 12;
        }else{
            console.log('Error!')
        }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = 15;
            }else if (age <= 64) {
                price = 20;
            }else if(age <= 122){
                price = 15;
            }else{
                console.log('Error!')
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
            }else if(age <= 64) {
                price = 12;
            }else if(age <= 122){
                price = 10;
            }else{
                console.log('Error!')
            }
            break;
    }

    console.log(price + '$')
}