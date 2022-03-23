let CATALOG = [];

function render() {
  shoppingCounter.render();
  products.render();
}

fetch("./server/catalog.json")
  .then((resp) => resp.json())
  .then((data) => {
    CATALOG.push(...data);
    render();
  })
  .catch((e) => {
    errorHandler.render(e);
  });
