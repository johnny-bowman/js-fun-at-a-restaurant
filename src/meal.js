function nameMenuItem(name) {
  return "Delicious " + name
}

const createMenuItem = (name, price, type) => {
  return {
    name: name,
    price: price,
    type: type
  }
}

const addIngredients = (ingredient, array) => {
  if (!array.includes(ingredient)) {
    array.push(ingredient);
  }
}

const formatPrice = (price) => {
  return "$" + price;
}

const decreasePrice = (price) => {
  return price * 0.9
}

const createRecipe = (title, ingredients, menuItemType) => {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


