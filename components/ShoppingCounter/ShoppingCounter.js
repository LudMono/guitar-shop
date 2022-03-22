class ShoppingCounter {

  handeClick() {
    cart.render();
  }

  render(products) {
    const productsStore = localStorageProducts.getProducts();
    let counter = products || productsStore.length
    const html = `
      <h1 class="header__heading">Guitar Shop</h1>
      <div class="header__shopping-counter shopping-counter">
        <div class="shopping-counter__counter">
          <button class="button" type="button" onclick="shoppingCounter.handeClick()">
          <span>🛒</span>
          <span>${counter}</span>
          </button>
        </div>
      </div>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}

const shoppingCounter = new ShoppingCounter();
shoppingCounter.render()
