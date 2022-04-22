// Varaibles
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const encriptar = document.querySelector('#encriptar');
const desencriptar = document.querySelector('#desencriptar');
const containerResultado = document.querySelector('.container__resultado');
const resultadoTitulo = document.querySelector('.container__resultado__titulo');
const resultadoDescripcion = document.querySelector('.container__resultado__descripcion');
const resultadoImg = document.querySelector('.container__resultado__img');
const btnCopiar = document.querySelector('#btnCopiar');
let textoInput = "";
let texto = [];
let textoEncriptado = [];
let textoDesencriptado = [];

// Funcion para encriptar
const encriptarTexto = () => {
  textoEncriptado = [];
  output.innerHTML = "";
  textoInput = input.value.toLowerCase().split('');
  textoInput.forEach((letra) => {
    switch (letra) {
      case "a":
        textoEncriptado.push("ai");
        break;
      case "e":
        textoEncriptado.push("enter");
        break;
      case "i":
        textoEncriptado.push("imes");
        break;
      case "o":
        textoEncriptado.push("ober");
        break;
      case "u":
        textoEncriptado.push("ufat");
        break;
      default:
        textoEncriptado.push(letra);
        break;
    }
  });
  textoEncriptado = textoEncriptado.join('');
  resultadoTitulo.style.display = 'none';
  resultadoDescripcion.style.display = 'none';
  resultadoImg.style.display = 'none';
  output.style.display = 'flex';
  btnCopiar.style.display = 'block';
  output.innerHTML = textoEncriptado;
  console.log(texto);
}
encriptar.addEventListener('click', () => {
  encriptarTexto();
});

// Funcion para desencriptar
const desencriptarTexto = () => {
  textoDesencriptado = [];
  output.innerHTML = "";
  textoInput = input.value.toLowerCase().split('');
  textoInput.forEach((letra, index) => {
    switch (letra) {
      case "a":
        textoInput.splice(index, 2, "a");
        break;
      case "e":
        textoInput.splice(index, 5, "e");
        break;
      case "i":
        textoInput.splice(index, 4, "i");
        break;
      case "o":
        textoInput.splice(index, 4, "o");
        break;
      case "u":
        textoInput.splice(index, 4, "u");
        break;
      default:
        break;
    }
    textoDesencriptado.push(letra);
  });
  textoDesencriptado = textoDesencriptado.join('');
  resultadoTitulo.style.display = 'none';
  resultadoDescripcion.style.display = 'none';
  resultadoImg.style.display = 'none';
  output.style.display = 'flex';
  btnCopiar.style.display = 'block';
  output.innerHTML = textoDesencriptado;
}
desencriptar.addEventListener('click', () => {
  desencriptarTexto();
});

// Funcion para copiar al portapapeles
const copiarTexto = () => {
  output.select();
  document.execCommand('copy');
}
btnCopiar.addEventListener('click', () => {
  copiarTexto();
});

// Funcion para comprobar que se ha ingresado solo letras
// const comprobarTexto = (texto) => {
