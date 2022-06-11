function demo(input) {
    
    let animal = input[0];
    let animalType = "";

    if (animal === "dog") {
        animalType = "mammal";
    }else if(animal === "crocodile" || animal === "tortoise" || animal === "snake"){
        animalType = "reptile";
    }else{
        animalType = "unknown";
    }

    console.log(animalType);
}