function maxNumber(input) {
    
    let data = input[0];
    let counter = 1;
    let maxNum = Number.MIN_VALUE;

    while(data !== "Stop"){

        let number = Number(data);

        if (number > maxNum) {
            maxNum = number;
        }

        data = input[counter];
        counter++;
    }

    console.log(maxNum);
}

maxNumber(["-1",
"-2",
"Stop"])
