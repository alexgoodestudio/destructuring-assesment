function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2)
  return `$${amount}`
}

function chooseItemByNameAndSize(products, name, size) {
  let selection = null;
  for(let key in products){
    const prod = products[key]
    if(prod.name === name && prod.availableSizes.includes(size)){
        selection = prod
    }
  }
return selection;
}

function addProductToCart({name, priceInCents},cart ={}) {
 if(cart[name]){
   cart[name].quantity++
 }else{
   cart[name] = {quantity: 1, priceInCents}
 }
  return cart
}

function calculateTotal(cart) {
  let total = 0
    for(let itemKey in cart){
      const {quantity, priceInCents}= cart[itemKey]
      total += quantity * priceInCents;
  }
  return total;
}

function printReceipt(cart) {
 if(Object.keys(cart).length === 0) return null;
  let result =[]
 
  for(let itemName in cart){
    let{quantity,priceInCents} = cart[itemName];
    let itemTotal = quantity * priceInCents;
    result.push(`${quantity}x${itemName} - ${printablePrice(itemTotal)}`);
  }
  result.push(`Total: ${printablePrice(calculateTotal(cart))}`)
  return result.join("\n");

}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
}
