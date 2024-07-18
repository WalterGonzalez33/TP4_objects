const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
    return `Ingreso finalizado exitosamente`;
  },
  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      return `Extracción finalizada exitosamente`;
    }

    return `Saldo insuficiente`;
  },
  informar: function () {
    return `El balance actual de la cuenta es: ${this.saldo}`;
  },
};

document.write(cuenta.informar(), `<br>`);
document.write(cuenta.ingresar(1000), `<br>`);
document.write(cuenta.extraer(800), `<br>`);
document.write(cuenta.informar());
