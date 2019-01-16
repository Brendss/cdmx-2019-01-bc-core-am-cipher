let pagina1 = document.getElementById('Crear').addEventListener('click', page1);
let paina2 = document.getElementById('Descifrar').addEventListener('click', page2);
let pagina3 = document.getElementById('regresar').addEventListener('click', page3);
let pagina4 = document.getElementById('regresar2').addEventListener('click', page3);
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
  window.cipher.encode(offset, mayus)
})
