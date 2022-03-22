class ShoppingCounter {

  handeClick() {
    cart.render();
  }

  render(products) {
    const productsStore = localStorageProducts.getProducts();
    let counter = products || productsStore.length
    const html = `
      <div class="shopping-counter">
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
