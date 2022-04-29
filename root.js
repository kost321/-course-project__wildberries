// HEADER

const searchInput = document.querySelector('.search__bar');
const sale = document.getElementById('sale');

const urlGoods = 'https://62593b6a43fda1299a0a95e4.mockapi.io/goods';
let goods = [];
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

(async () => {
    goods = await getData(urlGoods);
    topSale(goods, sale);
})()

function clearSale(){
    while (sale.firstChild){
        sale.removeChild(sale.firstChild)
    }
}

searchInput.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    let searchResult = goods.filter(item => item.name.includes(inputValue));
    if (inputValue.length > 0) {
        clearSale();
        topSale(searchResult, sale);
    } else {
        clearSale();
        topSale(goods, sale);
    }
});

//---------Show-----------
let clickBuscet =  document.querySelector('.cart-title');
const showBuscet = () => {
    console.log('баскет')
    let buscetElement = document.querySelector('.Container');
    if (buscetElement.style.display === 'none'){
        buscetElement.style.display = 'block';
    } else {
        buscetElement.style.display = 'none';
    }
}

clickBuscet.addEventListener('click',showBuscet);

function topSale (goods, root) {
  const topSaleElement = document.createElement('div');
  topSaleElement.classList.add('container-wrapper');
  for (var key in goods) {
      const goodsCard = document.createElement('div');
      goodsCard.classList.add('goods-card');
      const goodsCardImage = document.createElement('div');
      goodsCardImage.classList.add('goods-card__image');
      const goodsCardImageLink = document.createElement('img');
      goodsCardImageLink.classList.add('good-card__image-link');
      goodsCardImageLink.src = goods[key].img;
      const goodsCardImageClue = document.createElement('a');
      goodsCardImageClue.classList.add('goods-card__image-clue');
      goodsCardImageClue.textContent = 'Быстрый просмотр';
      const goodsCardSale = document.createElement('div');
      goodsCardSale.classList.add('goods-card__sale');
      goodsCardSale.textContent = `-${goods[key].sale}%`;
      const goodsCardCart = document.createElement('i');
      goodsCardCart.classList.add('fa-solid', 'fa-cart-shopping');
      goodsCardImage.append(goodsCardImageLink, goodsCardImageClue, goodsCardSale, goodsCardCart);
      const goodsCardCost = document.createElement('div');
      goodsCardCost.classList.add('goods-card__cost');
      const goodsCardNewCost = document.createElement('div');
      goodsCardNewCost.classList.add('goods-card__cost-new');
      let newCost = (goods[key].cost-(goods[key].cost / 100 * goods[key].sale));
      newCost = newCost.toFixed(2);
      goodsCardNewCost.textContent = `${newCost}$`;
      const goodsCardOldCost = document.createElement('div');
      goodsCardOldCost.classList.add('goods-card__cost-old');
      goodsCardOldCost.textContent = `${goods[key].cost}$`;
      goodsCardCost.append(goodsCardNewCost, goodsCardOldCost);
      const goodsCardName = document.createElement('div');
      goodsCardName.classList.add('goods-card__name');
      goodsCardName.textContent = `${goods[key].name}`;
      goodsCard.append(goodsCardImage, goodsCardCost, goodsCardName);
      topSaleElement.append(goodsCard);
  }
  root.append(topSaleElement);
}
 