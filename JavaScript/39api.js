let get_product_data = fetch("https://fakestoreapi.com/products?limit=15")
  .then((response) => {
    let fetched_data = response.json();
    return JSON.stringify(fetched_data);
  })
  .then((data) => {
    document.write(data + "<br>");
  });
