console.log("holap2")

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito'); //getElementsByClassName('parrafito');
const pid = document.querySelector('#pid'); //getElementById(pid)
const input = document.querySelector('input');

console.log({
    h1,p,parrafito,pid,input
})

console.log(input);
//Cambia el texto
h1.innerHTML = "Patito <br/> feo"; //La etiqeuta tiene efecto
h1.innerText = "Patito <br/> feo"; //La etiqueta no tiene efecto

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
//h1.classList.remove('verde');

input.value = "1234";

const img = document.createElement('img')
img.setAttribute('src', 'https://cdn.vox-cdn.com/thumbor/4E98u_RfYxa8pkRK79CyPClFABY=/0x0:1147x647/1200x800/filters:focal(483x233:665x415)/cdn.vox-cdn.com/uploads/chorus_image/image/70742090/Jotaro.0.jpeg')
pid.append(img) //pid.replaceWith(img); PARA BORRAR EL P




