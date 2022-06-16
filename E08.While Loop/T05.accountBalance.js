function accountBalance(input) {
    
    let data = input[0];
    let counter = 1;
    let sum = 0;

    while (data !== "NoMoreMoney") {
        
        let money = Number(data);

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }else{
            sum += money;
            console.log(`Increase: ${money.toFixed(2)}`);
        }

        data = input[counter];
        counter++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
