function solve(country) {

    let languege = "";

    switch (country) {
        case "England":
        case "USA":
            languege = "English";
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            languege = "Spanish";
            break;  
        default:
            languege = "unknown";
            break;
    }
    console.log(languege)
}