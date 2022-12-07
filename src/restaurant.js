const createRestaurant = (name) => {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

const addMenuItem = (restaurant, item) => {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item);
  }
}

const removeMenuItem = (restaurant, itemName, type) => {
  for (let i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === itemName) {
      restaurant.menus[type].splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}