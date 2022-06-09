function demo(input) {
    
    let password = input[0];
    let neededPassword = "s3cr3t!P@ssw0rd";

    if (password === neededPassword) {
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}