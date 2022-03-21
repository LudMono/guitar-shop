class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  setProducts(id) {
    let products = this.getProducts();
    let newProduct = true;
    const isExist = products.indexOf(id);

    if (isExist === -1) {
      newProduct = false;
      products.push(id);
    } else {
      products.splice(isExist, 1);
    }
    localStorage.setItem(this.keyName, JSON.stringify(products));

    return {
      newProduct,
      products,
    };
  }
}
