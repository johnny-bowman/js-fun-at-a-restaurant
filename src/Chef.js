class Chef {
  constructor(name, restaurant) {
    this._name = name
    this._restaurant = restaurant
  }

  get name() {
    return this._name;
  }

  get restaurant() {
    return this._restaurant;
  }

  greetCustomer(name, morning) {
    if (morning) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    }
  }

  checkForFood(item) {

    // for (let i = 0; i < this.restaurant.menus; i++) {
    //   for (let j = 0; j < this.restaurant.menus[item.type]; j++) {
    //     if (this.restaurant.menus[i][j].name === item.name) {
    //       return `Yes, we're serving ${item.name} today!`;
    //     }
    //   }
    // }
    for (let i = 0; i < this.restaurant.menus[item.type].length; i++) {
      if (this.restaurant.menus[item.type][i].name === item.name) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
    return `Sorry, we aren't serving ${item.name} today.`;
  }
}

module.exports = Chef;