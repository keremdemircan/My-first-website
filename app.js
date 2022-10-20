const firstNumber = document.getElementById
("first-number");
const secondNumber = document.getElementById
("second-number");
//const equalButton = document.getElementById
//("equal");
const carpButton = document.querySelector("#Carp")
const ToplaButton = document.querySelector("#Topla")
const CikarButton = document.querySelector("#Cikar")
const BolButton = document.querySelector("#Bol")

const resultText = document.getElementById
("sonuc");

carpButton.addEventListener("click" , () => {
    let x = Number(firstNumber.value);
    let y = Number(secondNumber.value);

    let sonuc = x*y;

    resultText.innerHTML= `Result: ${sonuc}`;
});
ToplaButton.addEventListener("click" , () => {
    let x = Number(firstNumber.value);
    let y = Number(secondNumber.value);

    let sonuc = x+y;

    resultText.innerHTML= `Result: ${sonuc}`;
});
CikarButton.addEventListener("click" , () => {
    let x = Number(firstNumber.value);
    let y = Number(secondNumber.value);

    let sonuc = x-y;

    resultText.innerHTML= `Result: ${sonuc}`;
});
BolButton.addEventListener("click" , () => {
    let x = Number(firstNumber.value);
    let y = Number(secondNumber.value);

    let sonuc = x/y;

    resultText.innerHTML= `Result: ${sonuc}`;
});


//equalButton.addEventListener("click" , () => {
//   let x = Number(firstNumber.value);
//   let y = Number(secondNumber.value);

//     let sonuc = x+ y;

//     resultText.innerHTML= `Result: ${sonuc}`;


// });
