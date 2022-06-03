function demo(input) {
  let neededNylon = Number(input[0]);
  let neededPaint = Number(input[1]);
  let neededThenner = Number(input[2]);
  let hours = Number(input[3]);

  let nylonPrice = (neededNylon + 2) * 1.5;
  let paintPrice = neededPaint * 1.10 * 14.5;
  let thennerPrice = neededThenner * 5;

  let totalMaterialsPrice = nylonPrice + paintPrice + thennerPrice + 0.40;
  let masterMoney = totalMaterialsPrice * 0.30 * hours;

  let finalSum = totalMaterialsPrice + masterMoney;

  console.log(finalSum);
}
