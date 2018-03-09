//Define a global variable in JS, array “cart”

var cart = [];

//Write onclick handler in JS that takes item names, pushes them into “cart” array if they are not yet there, removes them if they are, console logs cart.length.

//Capture item name and push into cart array
function addCart(choice){
  event.preventDefault();
    
  cart.push(choice);
  
  console.log(cart.length);  
  console.log(cart)
}

//Remove item if found in cart, write 'not in cart' message if not
function removeCart(choice){
  event.preventDefault();
    
  var i = cart.indexOf(choice);
  
  if(i == -1){
    console.log(choice + " not in cart.")
  }else{
    cart.splice(i, 1);
  }
  
  console.log(cart.length);  
  console.log(cart)
}


