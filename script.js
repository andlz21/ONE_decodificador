let textArea = document.querySelector('#enterText');

let outputArea = document.querySelector('#outputArea');

function criptoFunc() {
  let textContent = textArea.value;

  let resultText = textContent.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  document.getElementById('outputArea').innerHTML = '<textarea readonly id="resultTextArea">' + resultText +
  '</textarea>' +  '<button id="buttonCopy" onClick="copyText()">Copiar</button>'
}

function descriptoFunc() {
  let textContent = textArea.value;

  let resultDescripto = textContent.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.getElementById('outputArea').innerHTML = '<textarea readonly id="resultTextArea">' + resultDescripto +
  '</textarea>' +  '<button id="buttonCopy" onclick="copyText()">Copiar</button>'
}

function copyText() {
  var textCopy = document.getElementById('resultTextArea');

  textCopy.select();
  document.execCommand('copy');
  alert('O texto foi copiado para a área de transferência.');
}

