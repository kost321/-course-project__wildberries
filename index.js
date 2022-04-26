 const root = document.getElementById('root');

//----------shopping cart--------------


 const Container = document.createElement('div');
Container.classList.add('Container');
Container.style.display = 'none';

const activePanel = document.createElement('div');
activePanel.classList.add('container__block');

const elementBascet = document.createElement('div');
elementBascet.classList.add('block__bascet');
elementBascet.textContent = "Корзина";

const elementDeleteAll = document.createElement('button');
elementDeleteAll.classList.add('block__btn');
elementDeleteAll.textContent = "Очистить корзину";

const containerProduct = document.createElement('div');
containerProduct.classList.add('container-product')

//------------some-product---------------

const getProduct = (text,price) => {

    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product-item');

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.innerHTML = `<span>${text}<span>`

    const priceProduct = document.createElement('div');
    priceProduct.classList.add('product-price');
    priceProduct.innerHTML = `<span>${price}<span>`;

    productWrapper.append(productName,priceProduct);
 
    return  productWrapper
}



const sale  = document.querySelector("#sale");

const createProduct = (event) => {
    const target = event.target;
    if (!target.classList.contains('fa-cart-shopping')) { 
    return 
}
    const itemProduct = target.closest('.goods-card');
    console.log("itemProduct",itemProduct);


    const itemCost = itemProduct.querySelector('.goods-card__cost-new');
    const itemName = itemProduct.querySelector('.goods-card__name');
        
    const text = itemName.innerText;
    const price = itemCost.innerText;
    
    containerProduct.append(getProduct(text,price));   
    console.log("getProduct",getProduct());
 }

sale.addEventListener('click',createProduct);


//---------DeleteAll---------------
const deleteElements = () => {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item) => item.remove());
    console.log(productItems);
    
    sumPrice.textContent = `All : ${price = 0}`;
    
    
    console.log('asd',[sumPrice]);
}
elementDeleteAll.addEventListener('click',deleteElements);

//------------Sum----------------

const sumPrice = document.createElement('div');
sumPrice.classList.add('sum-price');
sumPrice.textContent = "All : 0";

let price = 0;
const sum = (event) => {
    const target = event.target;
    if (!target.classList.contains('fa-cart-shopping')) { 
        return 
    }
    const itemPrice = target.closest('.goods-card');
    const productPrice = itemPrice.querySelector('.goods-card__cost-new');
    price += +productPrice.textContent.split('$')[0];
    sumPrice.innerText = `All : ${price.toFixed(2)}$`
    console.log("product",productPrice);
    Container.append(sumPrice); 
}

sale.addEventListener('click',sum);


activePanel.append(elementBascet,elementDeleteAll);


Container.append(activePanel,containerProduct, sumPrice);


root.append(Container);