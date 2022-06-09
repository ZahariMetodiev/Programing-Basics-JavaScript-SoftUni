function demo(input) {
    
    let speed = Number(input[0]);
    let str = "";

    if (speed <= 10) {
        str = "slow"
    }else if(speed <= 50){
        str = "average";
    }else if(speed <= 150){
        str = "fast"
    }else if(speed <= 1000){
        str = "ultra fast"
    }else{
        str = "extremely fast"
    }

    console.log(str);
}