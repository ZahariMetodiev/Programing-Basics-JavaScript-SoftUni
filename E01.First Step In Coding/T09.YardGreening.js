function YardGreening(input) {
    
    let area = Number(input[0]);

    let price = area * 7.61;
    let discaunt = price * 0.18;
    let finalPrice = price - discaunt;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discaunt} lv.`);
}