import topSale from './topSale';


const sale = document.getElementById('sale');
fetch('https://62593b6a43fda1299a0a95e4.mockapi.io/goods')
  .then(response => response.json())
  .then((response) => topSale(response, sale))


