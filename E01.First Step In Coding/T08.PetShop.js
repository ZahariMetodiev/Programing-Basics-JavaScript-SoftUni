function GetPrice(input) {
    
    let dogFoodsCount = Number(input[0]);
    let catFoodsCount = Number(input[1]);

    let dogPrice = dogFoodsCount * 2.50;
    let catPrice = catFoodsCount * 4;

    let totalPrice = dogPrice + catPrice;

    console.log(totalPrice);
}