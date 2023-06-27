console.log("holap2")

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn1 = document.querySelector('#btnCalcular1');
const btn2 = document.querySelector('#btnCalcular2');
const pResult = document.querySelector('#resultado');

function btnOnClick(){
    console.log(parseInt(input1.value) + parseInt(input2.value));
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + resultado
}

btn2.addEventListener('click', btnOnClick) //Para que no de un error raro, hay que poner type="button" en el html