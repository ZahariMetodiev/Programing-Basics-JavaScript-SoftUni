function demo(input) {
    
    let chemicalsPrice = 5.80;
    let markerPrice = 7.20;
    let preparationPrice = 1.20;

    let chemicalCount = input[0];
    let markerCount = input[1];
    let preparationCount = input[2];
    let percent = input[3];

    let price = (chemicalsPrice * chemicalCount) + (markerPrice * markerCount) + (preparationPrice * preparationCount);
    price -= price * percent / 100;

    console.log(price);
    console.log(price.valueOf);
}