/*const searchInput = document.querySelector('.search__bar');
const searchList = document.querySelector('.search__list');

let goods = [];
fetch('https://62593b6a43fda1299a0a95e4.mockapi.io/goods')
  .then(response => response.json())
  .then((response) => {
      goods = response
    })

function clearList(){
    while (searchList.firstChild){
        searchList.removeChild(searchList.firstChild)
    }
}

searchInput.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    let searchResult = goods.filter(item => item.name.includes(inputValue));
    clearList();
    if (inputValue.length > 0) {
        for (const item of searchResult){
            const resultItem = document.createElement('li')
            resultItem.classList.add('result-item')
            const text = document.createTextNode(item.name)
            resultItem.appendChild(text)
            searchList.appendChild(resultItem)
        }
    }
    
});

//---------Show-----------
let clickBuscet =  document.querySelector('.cart-title');
const showBuscet = () => {

   let buscetElement = document.querySelector('.Container');
    if (buscetElement.style.display === 'none'){
        buscetElement.style.display = 'block';
    } else {
        buscetElement.style.display = 'none';
    }  
    
  console.log(buscetElement);
  }
  
  clickBuscet.addEventListener('click',showBuscet);

  //----------block-----------
  
    const blockBuscet = () => {
    buscetElement = document.querySelector('.Container');
    buscetElement.style.display = 'none';
  console.log(buscetElement);
  }
  
  clickBuscet.addEventListener('click',showBuscet);
  */