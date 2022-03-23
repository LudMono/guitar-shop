class GetProducts {
  async sendRequest(url) {
    let CATALOG = [];
    try {
      await fetch(url)
        .then((resp) => resp.json())
        .then((resp) => CATALOG.push(...resp));
      return CATALOG;
    } catch (error) {
      console.log(error);
    }
  }
}

const getProducts = new GetProducts();
