//para cambio de pantallas
document.getElementById("Crear").addEventListener("click", page1);
document.getElementById("Descifrar").addEventListener("click", page2);
document.getElementById("regresar").addEventListener("click", page3);
document.getElementById("regresar2").addEventListener("click", page3);


//cambio de pantallas
function page1() {
  document.getElementById("Pantalla1").style.display = "none";
  document.getElementById("Pantalla2").style.display = "block";
  document.getElementById("Pantalla3").style.display = "none";
}

function page2() {
  document.getElementById("Pantalla1").style.display = "none";
  document.getElementById("Pantalla3").style.display = "block";
  document.getElementById("Pantalla2").style.display = "none";
}

function page3() {
  document.getElementById("Pantalla1").style.display = "block";
  document.getElementById("Pantalla2").style.display = "none";
  document.getElementById("Pantalla3").style.display = "none";
}

//para codificar
const desplazar = document.getElementById("desplazar");
const textACod = document.getElementById("textACod");
const crear2 = document.getElementById("Crear2");

crear2.addEventListener("click", () => {
  const mayus = textACod.value;
  const offset = desplazar.value;
  document.getElementById("textCod").innerHTML = window.cipher.encode(offset, mayus);
});

//para decodificar
const desplazar2 = document.getElementById("desplazar2");
const textADecod = document.getElementById("textADecod");
const descifrar2 = document.getElementById("Descifrar2");

descifrar2.addEventListener("click", () => {
  const text = textADecod.value;
  const off = desplazar2.value;
  document.getElementById("textDecod").innerHTML = window.cipher.decode(off, text);
});
