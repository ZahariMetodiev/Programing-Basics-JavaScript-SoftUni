function demo(input) {
    
    let chichenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);

    let totalMenuPrice = (chichenMenuCount * 10.35) + (fishMenuCount * 12.40) + (vegetarianMenuCount * 8.15);
    let desertPrice = totalMenuPrice * 0.20;
    let delivery = 2.50;

    let total = totalMenuPrice + desertPrice + delivery;

    console.log(total);
}