var btnClear = document.querySelector('button');
var inputs = document.querySelectorAll('input');
 
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});