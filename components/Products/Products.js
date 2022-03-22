class Products {
  constructor() {
    this.activeClassName = "button--active";
    this.addLabel = "Добавить в корзину";
    this.removeLabel = "Удалить из корзины";
  }

  handlePurchase(el, id) {
    const { isExist, products } = localStorageProducts.setProducts(id);

    if (isExist) {
      el.classList.add(this.activeClassName);
      el.innerText = this.removeLabel;
    } else {
      el.classList.remove(this.activeClassName);
      el.innerText = this.addLabel;
    }
  }

  render() {
    const productsStore = localStorageProducts.getProducts();

    const items = CATALOG.map(({ id, name, img, price }) => {
      id = id.toString()

      let activeState = "";
      let buttonLabel = "";

      if (productsStore.indexOf(id) === -1) {
        buttonLabel = this.addLabel;
      } else {
        buttonLabel = this.removeLabel;
        activeState = this.activeClassName;
      }

      return `
      <li class="products__item">
        <article class="item-card">
          <h3 class="item-card__heading">${name}</h3>
          <div class="item-card__img">
            <img src="${img}" alt="${name}" />
          </div>
          <h5 class="item-card__price">🚀${price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}</h5>
          <button class="button button--primary ${activeState}" type="button" onclick="products.handlePurchase(this, ${id})">${buttonLabel}</button>
        </article>
      </li>
      `;
    });

    const html = `
      <ul class="products__list">
        ${items.join("\n")}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const products = new Products();
products.render();
