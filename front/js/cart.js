

let panier = JSON.parse(localStorage.panier);

for (let productId in panier) {
    for(let color in panier[productId].quantity) {
        console.log(panier[productId])
        const idProduct = panier[productId]

        document.querySelector("#cart__items").innerHTML += `<article class="cart__item" data-id="${productId}">
        <div class="cart__item__img">
          <img src="${idProduct.image}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__titlePrice">
            <h2>${idProduct.name}</h2>
            <h2>${color}</h2>
            <p>${idProduct.price} €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${idProduct.quantity[color]}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>`
    }
}

function displayTotal(){
  let panier = JSON.parse(localStorage.panier);

  let amountTotal =  0;
  let nbArticles = 0;

for (let productId in panier) {
    for(let color in panier[productId].quantity) {
      const idProduct = panier[productId]
      nbArticles += idProduct.quantity[color];
      amountTotal += idProduct.quantity[color] * idProduct.price;
    }
  }
  document.querySelector("#totalPrice")
    .innerHTML = amountTotal;
  document.querySelector("#totalQuantity")
    .innerHTML = nbArticles;
}
displayTotal();

function modifyQuantity(){
  var test = document.querySelector(".itemQuantity")
    .closest("article")
    .dataset.id;

  return console.log(test);
}

modifyQuantity();