const manufacturersCatalog = document.getElementsByClassName('manufacturers-catalog')[0];
const productsCatalog = document.getElementsByClassName('products-catalog')[0];
const sortSelect = document.getElementsByName('sort-byAlph')[0];
const btnBack = document.getElementsByClassName('btn-back')[0];

class ApiService {
  static async manufacturersAPI(sort) {
    return (await (await fetch(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${sort}`))
      .json())
      .filter(manufacturer => manufacturer.icon)
      .map(manufacturer => {
        const newManufacturerCell = document.createElement('li');
        newManufacturerCell.className = 'manufacturer-item';
        newManufacturerCell.innerHTML = `<a href='#'><img id=${manufacturer._id} src='${
          manufacturer.icon
          }' alt='${manufacturer.title}.jpg' width='200' height='200'></a>`;
        manufacturersCatalog.appendChild(newManufacturerCell);
      })
  };
  static async productsAPI(manufacturerId) {
    return await (await fetch(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/goods?manufacturer=${manufacturerId}`))
      .json();
  }
}

(async () => {
  await ApiService.manufacturersAPI('?sort=1')
})();

sortSelect.onchange = async (e) => {
  manufacturersCatalog.innerHTML = '';
  await ApiService.manufacturersAPI(`?sort=${e.target.value}`);
}

manufacturersCatalog.onclick = (e) => {
  if (e.target != manufacturersCatalog) {
    manufacturersCatalog.style.display = 'none';
    btnBack.style.display = 'inline-block';
    (async () => {
      (await ApiService.productsAPI(e.target.id))
        .result
        .map(product => {
          const newProductCell = document.createElement('li');
          newProductCell.className = 'product-item';
          newProductCell.innerHTML = `<a href="#"><img id=${product._id} src="${
            product.imageLink
            }" alt="${product.name}.jpg" width="200" height="200"></a>`;
          productsCatalog.appendChild(newProductCell);
        })
    })();
  }
} 

btnBack.onclick = () => {
  manufacturersCatalog.style.display = 'flex';
	productsCatalog.innerHTML = '';
	btnBack.style.display = 'none';
}