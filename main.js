const manufacturersCatalog = document.getElementsByClassName('manufacturers-catalog')[0];
const productsCatalog = document.getElementsByClassName('products-catalog')[0];
const sortSelect = document.getElementsByName('sort-byAlph')[0];

class ApiService {
  static async manufacturersAPI(sort) {
    return (await (await fetch(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${sort}`))
    .json())
    .filter(manufacturer => manufacturer.icon)
    .map(manufacturer => {
      const newManufacturerCell = document.createElement('li');
      newManufacturerCell.className = 'manufacturer-item';
      newManufacturerCell.innerHTML = `<a href="#"><img id=${manufacturer._id} src="${
        manufacturer.icon
        }" alt="${manufacturer.title}.jpg" width="200" height="200"></a>`;
      manufacturersCatalog.appendChild(newManufacturerCell);
    })
  };
}

(async () => {
  (await ApiService.manufacturersAPI('?sort=1'))
})();

sortSelect.onchange = async (e) => {
  manufacturersCatalog.innerHTML = '';
  await ApiService.manufacturersAPI(`?sort=${e.target.value}`);
}