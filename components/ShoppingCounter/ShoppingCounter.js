class ShoppingCounter {
  render(products) {
    const productsStore = localStorageProducts.getProducts();
    let counter = products || productsStore.length
    const html = `
      <div class="cart">
        <div class="cart__counter">
          <button class="button" type="button">
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
