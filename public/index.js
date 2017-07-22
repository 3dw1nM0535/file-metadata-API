var input = document.getElementById('inputFile');
var label = document.getElementsByTagName('label');

input.addEventListener('change', (e) => {
  label.innerHTML=e.target.value.split('\\').reverse()[0];
  console.log(e.target.value);
});