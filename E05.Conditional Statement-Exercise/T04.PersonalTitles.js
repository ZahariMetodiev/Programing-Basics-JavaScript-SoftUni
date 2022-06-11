function demo(input) {
    
    let age = Number(input[0]);
    let gender = input[1];
    let output = "";
    
    if (gender === "m") {
        if (age < 16) {
           output = "Master" 
        }else{
            output = "Mr."
        }
    } else if(gender === "f"){
        if (age < 16) {
            output = "Miss" 
         }else{
             output = "Ms."
         }
    }
                                                                                                                                     
      console.log(output);
}