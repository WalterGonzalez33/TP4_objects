class Product {
  constructor(code, name, price) {
    (this.code = code), (this.name = name), (this.price = price);
  }
  showData() {
    document.write(`Producto: ${this.name}`, `<br>`)
    document.write(`---Código: ${this.code}`, `<br>`);
    document.write(`---Precio: $${this.price}`, `<br><br>`);
  }
}
const products = [];
products.push(new Product("A5603b", "Chocolate Milka", 3000));
products.push(new Product("H4506m", "Arroz Gallo", 2500));
products.push(new Product("C4509k", "Queso Cremoso", 3300));

products.forEach((product) => product.showData());
