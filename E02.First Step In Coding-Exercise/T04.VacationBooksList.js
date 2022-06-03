function vacation(input) {
    
    let numbersOfPages = input[0];
    let pagesForHour = input[1];
    let days = input[2];

    let totalTime = numbersOfPages / pagesForHour;
    let neededTime = totalTime / days;

    console.log(neededTime);
}