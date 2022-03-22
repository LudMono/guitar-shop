class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    let productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    } else {
      return [];
    }
  }
  setProducts(id) {
    id = id.toString();
    let products = this.getProducts();
    let isExist = false;
    let isExistIndex = products.indexOf(id);

    if (isExistIndex === -1) {
      isExist = true;
      products.push(id);
    } else {
      products.splice(isExistIndex, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return {
      products,
      isExist,
    };
  }
}

const localStorageProducts = new LocalStorageUtil();
