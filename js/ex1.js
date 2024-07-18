const cart = {
  color: "red",
  brand: "fiat",
  model: "Cronos 1.3",
  state: true,
  startUp: function () {
    this.state = true;
    return ` El auto esta en marcha `;
  },
  turnOff: function () {
    this.state = false;
    return ` El auto se apagó `;
  },
};

document.write(cart.startUp(), `<br>`);
document.write(cart.turnOff());
