function sumOddNumbers(count) {
    
    let sum = 0;

    for (let index = 1; index < count * 2; index+= 2) {
        sum += index;
    }
    console.log(`Sum: ${sum}`);
}