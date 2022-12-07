const takeOrder = (order, orderArray) => {
  if (orderArray.length < 3) {
    orderArray.push(order);
  } 
}

const refundOrder = (orderNumber, orderArray) => {
  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i].orderNumber === orderNumber) {
      orderArray.splice(i, 1);
      break;
    }
  }
}

const listItems = (orderArray) => {
  let itemString = "";
  orderArray.forEach(order => itemString += order.item + ", ");
  return itemString.slice(0, -2);
}

const searchOrder = (orderArray, searchItem) => {
  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i].item == searchItem) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}