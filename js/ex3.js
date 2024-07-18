class Rectangles {
  constructor(height, width, unitMeasurement) {
    this.height = height;
    this.width = width;
    this.unitMeasurement = unitMeasurement;
  }
  modifyProperties(
    height = this.height,
    width = this.width,
    unitMeasurement = this.unitMeasurement
  ) {
    this.height = height;
    this.width = width;
    this.unitMeasurement = unitMeasurement;
    return `Modificación concretada`;
  }
  showProperties() {
    return `Alto: ${this.height}${this.unitMeasurement} | Ancho: ${this.width}${this.unitMeasurement}`;
  }
  area() {
    const area = this.height * this.width;
    return `El area de tu rectángulo es: ${area}${this.unitMeasurement}²`;
  }
  perimeter() {
    const perimeter = 2 * (this.height + this.width);
    return `El perímetro de tu rectángulo es: ${perimeter}${this.unitMeasurement}`;
  }
}

const rectanglesExample = new Rectangles(10, 20, "cm");

document.write(rectanglesExample.showProperties(), `<br>`);
document.write(rectanglesExample.modifyProperties(20, 50), `<br>`);
document.write(rectanglesExample.showProperties(), `<br>`);
document.write(rectanglesExample.perimeter(), `<br>`);
document.write(rectanglesExample.area());
