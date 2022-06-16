function readText(input) {
    
    let counter = 0;
    let text = "";

    while (text = input[counter] !== "Stop") {
        console.log(input[counter]);
        counter++;
    }
}
