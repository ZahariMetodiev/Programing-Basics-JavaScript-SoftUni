function sumNumbers(input) {
    
    let neededSum = Number(input[0]);
    let counter = 1;
    let sum = 0;
    
    while (true) {
        let data = Number(input[counter]);
        sum += data;

        if (sum >= neededSum) {
            break;
        }

        counter++;
    }

    console.log(sum);
}
