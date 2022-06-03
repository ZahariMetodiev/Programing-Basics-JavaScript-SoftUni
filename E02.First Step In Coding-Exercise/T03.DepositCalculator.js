function depositCalculator(input) {
    
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let tax = Number(input[2]);

    let sum = deposit + period * ((deposit * tax / 100) / 12)

    console.log(sum);
}