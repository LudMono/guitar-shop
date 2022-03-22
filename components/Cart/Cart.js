class Cart {
  handleClose() {
    ROOT_CART.innerHTML = "";
  }

  render() {
    let totalSum = 0;
    const productsStore = localStorageProducts.getProducts();
    let items = [];

    if (productsStore.length) {
      items = CATALOG.map(({ id, name, price }) => {
        if (productsStore.includes(id.toString())) {
          totalSum += price;
          return `
            <li class="list-cart__item">
              <h3 class="list-cart__name">${name}</h3>
              <h5 class="list-cart__price">${price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}</h3>
            </li>
          `;
        }
      });
    }

    const cartBody = `
     ${
       items.length
         ? `
         <ul class="cart__list list-cart">
            ${items.join("\n")}
          </ul>
          <span class="cart__totalSum">
            Итоговая сумма: <span>${totalSum.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}</span>
          </span>`
         : "<h3>Корзина пуста</h3>"
     }
    `;

    const html = `
      <div class="cart">
        <div class="cart__wrapper">
        <span class="cart__close" onclick="cart.handleClose()">❌</span>
          ${cartBody}
        </div>
      </div>
    `;
    console.log(productsStore.length);

    ROOT_CART.innerHTML = html;
  }
}

const cart = new Cart();
