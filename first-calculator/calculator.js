let calculation = '' || localStorage.getItem('calculation');

function updateCalculator(symbol) {
  calculation += symbol;
  document.querySelector('.js-calculation').innerHTML= calculation;
  localStorage.setItem('calculation', calculation);
}