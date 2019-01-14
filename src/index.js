document.getElementById('Crear').addEventListener('click',page1);
document.getElementById('Descifrar').addEventListener('click',page2);





function page1() {
    document.getElementById('Pantalla1').style.display='none';
    document.getElementById('Pantalla2').style.display='block';
    document.getElementById('Pantalla3').style.display='none';
  }

  function page2() {
    document.getElementById('Pantalla1').style.display='none';
    document.getElementById('Pantalla3').style.display='block';
    document.getElementById('Pantalla2').style.display='none';
  }