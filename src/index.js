document.getElementById('Crear').addEventListener('click', page1);
document.getElementById('Descifrar').addEventListener('click', page2);
document.getElementById('regresar').addEventListener('click', page3);
document.getElementById('regresar2').addEventListener('click', page3);
let crear2 = document.getElementById('Crear2');



function page1() {
  document.getElementById('Pantalla1').style.display = 'none';
  document.getElementById('Pantalla2').style.display = 'block';
  document.getElementById('Pantalla3').style.display = 'none';
}

function page2() {
  document.getElementById('Pantalla1').style.display = 'none';
  document.getElementById('Pantalla3').style.display = 'block';
  document.getElementById('Pantalla2').style.display = 'none';
}

function page3() {
  document.getElementById('Pantalla1').style.display = 'block';
  document.getElementById('Pantalla2').style.display = 'none';
  document.getElementById('Pantalla3').style.display = 'none';
}

let offset = document.getElementById('desplazar');
let mayus = document.getElementById('textACod');

crear2.addEventListener('click', () => {
  mayus = mayus.value.toUpperCase();
  offset = offset.value;
  //document.getElementById('textCode').innerHTML = "Bienvenida " + name;
  window.cipher.encode(offset, mayus)
})
