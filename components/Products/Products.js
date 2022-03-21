class Products {
  render() {
    const items = CATALOG.map(({ id, name, img, price }) => {
      return `
      <li class="products__item">
        <article class="item-card">
          <h3 class="item-card__heading">${name}<h3/>
          <div class="item-card__img">
            <img src="${img}" alt="${name}" />
          </div>
          <h5 class="item-card__price">${price}</h5>
          <button class="button button--primary" type="button">Купить сейчас</button>
        </article>
      </li>
      `;
    });

    const html = `
      <ul class="products__list">
        ${items.join('\n')}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const products = new Products();
products.render()
