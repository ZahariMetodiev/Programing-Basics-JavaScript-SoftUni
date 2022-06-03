function demo(input) {
    
    let taxPerYear = Number(input[0]);

    let snikersPrice = taxPerYear * 0.60;
    let kitPrice = snikersPrice * 0.80;
    let ballPrice = kitPrice * 0.25;
    let accessories = ballPrice * 0.20;

    let finalPrice = taxPerYear + snikersPrice + kitPrice + ballPrice + accessories;

    console.log(finalPrice);
}