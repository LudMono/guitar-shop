let CATALOG = [];

function render() {
  shoppingCounter.render();
  products.render();
}

try {
  fetch("./server/catalog.json")
    .then((resp) => resp.json())
    .then((data) => {
      CATALOG.push(...data);
      render();
    });
} catch (error) {
  console.log(error);
}
