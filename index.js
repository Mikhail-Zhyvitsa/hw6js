fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
console.log(data.products);

  for (let i= 0;i< data.products.length;i++) {
    const element = document.querySelector('.wrapper');
    element.insertAdjacentHTML(
      'beforeend',
      `<div class='item'>
      <div class='img'>< img class= 'image-full' src="${data.products[i].images[0]}" alt="no img"></div>
      <h2 class='item-title'>${data.products[i].title}</h2>
      <p class='item-description'>${data.products[i].description}</p>
      <p class='item-price'>Price:${data.products[i].price}$</p>
      <p class='item-rating'>Rating:${data.products[i].rating}</p>
      <button class='button'>Add to cart</button>
      </div>`
      );
  }
  
  function searchProducts(event) {
    event.preventDefault();
    const searchValue = inputSearch.value;
    filterProducts = products.filter(item => item.brand.toUpperCase() === searchValue.trim().toUpperCase() 
  ||     item.category.toUpperCase() === searchValue.trim().toUpperCase()
 ||      item.title.toUpperCase() === searchValue.trim().toUpperCase());
    return filterProducts;
  };

  document.addEventListener('DOMContentLoaded', function() {
    // id="btn" с помощью которой будем открывать модальное окно
    const btn = document.querySelector('#btn');
    // id="modal" как модальное окно
    const modal = new bootstrap.Modal(document.querySelector('#modal'));
    btn.addEventListener('click', function() {
    modal.show();
    });
  });
});
