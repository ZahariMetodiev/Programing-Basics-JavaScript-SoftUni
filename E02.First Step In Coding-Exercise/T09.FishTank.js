function demo(input) {
    
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumLitres = lenght * width * height * 0.001;
    let neededLitres = aquariumLitres * (1 - percent / 100);

    console.log(neededLitres);
}