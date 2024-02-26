

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready()
}

//functions
function ready(){
    //remove items from cart
    var removeCartButton = document.getElementsByClassName('cart-remove')
    console.log(removeCartButton)
    for(var i =0 ; i<removeCartButton.length; i++){
        var button = removeCartButton[i]
        button.addEventListener('click', removeCartItem)
    }
    //quantity change
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (var i =0 ; i< quantityInput.length; i++){
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }
    //Add to cart
    var addcart= document.getElementsByClassName('add-cart')
    for (var i =0 ; i< addcart.length; i++){
        var button = addcart[i];
        button.addEventListener('click', addCartClicked);
    }
    //buy button
    document.getElementsByClassName("btn-buy")[0].addEventListener('click',buyButtonClicked)
}
//remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}
//quantity changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value=1
    }
    updatetotal();
   }
//updated Total
function updatetotal(){
   var cartcontent = document.getElementsByClassName('cart-content')[0]
   var cartBoxes = cartcontent.getElementsByClassName("details-box");
   console.log(cartBoxes)
   var total = 0;
   for (var i = 0 ; i< cartBoxes.length;i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-product-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity= quantityElement.value;
    total = total+(price * quantity);
   }
    document.getElementsByClassName('total-price')[0].innerText="$" + total;
   
}
// Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopeProducts = button.parentElement;
    var itemName = shopeProducts.getElementsByClassName("item-title")[0].innerText;
    var priceItem = shopeProducts.getElementsByClassName("price")[0].innerText;
    var productImage = shopeProducts.getElementsByClassName("item1-img")[0].src;
    addProductsToCart(itemName,priceItem,productImage);
    updatetotal();
}


function addProductsToCart(itemName,priceItem,productImage){
    var cartShopbox = document.createElement("div");
    cartShopbox.classList.add("cart-box");
    var cartItems= document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i =0;i< cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == itemName) {
        alert(" you have already add this item to the cart"); 
        return;
        }
    }
    

var cartBoxContent = `<div class="details-box">
                          <img src="${productImage}" alt="contact" class="cart-img">
                          <div class="cart-product-title">${itemName}</div>
                          <div class="cart-product-price">${priceItem}</div>
                          <div></div>
                          <input type="number" value="1" class="cart-quantity" id="cart-quantity">
                          <i class="bx bxs-trash-alt cart-remove"></i>
                        </div>`;

    cartShopbox.innerHTML = cartBoxContent;
    cartItems.append(cartShopbox);         
    cartShopbox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);           
    cartShopbox
    .getElementsByClassName("cart-quantity")[0] 
    .addEventListener("change", quantityChanged);
}

    


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
  
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const addressError = document.getElementById("address-error");
  
    let hasError = false;
  
    // Validate name
    if (!name || name.trim() === "") {
      nameError.innerText = "Please enter your name";
      hasError = true;
    } else {
      nameError.innerText = "";
    }
  
    // Validate email
    if (!email || email.trim() === "") {
      emailError.innerText = "Please enter your email";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.innerText = "Please enter a valid email";
      hasError = true;
    } else {
      emailError.innerText = "";
    }
  
     // Validate phone
  if (!phone || phone.trim() === "") {
    phoneError.innerText = "Please enter your phone number";
    hasError = true;
    }else if (!/\d{10}/.test(phone)) {
    phoneError.innerText = "Please enter a valid phone number";
    hasError = true;
    } else {
    phoneError.innerText = "";
    }
    return hasError;
}
//buy button
function buyButtonClicked(){
    var name= document.getElementById("name").value
    var productTitle= document.getElementsByClassName("cart-product-title").value
    var quantity = document.getElementsByClassName("cart-quantity").value
    var price = document.getElementsByClassName('cart-product-price').value
    var total =document.getElementsByClassName("total-price").value
    if (validateForm() == false){
        alert(`Dear  ${name}, you have ordered ${quantity} of ${productTitle} each ${price} . Your total amount is ${total}` )
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    }
    
}

// font size change
const decreaseButton = document.getElementById('decreaseFont');
const increaseButton = document.getElementById('increaseFont');
const productPage = document.getElementsByClassName('shop-heading')[0];


let currentFontSize = 10;


decreaseButton.addEventListener('click', decreaseFontSize);
increaseButton.addEventListener('click', increaseFontSize);

function decreaseFontSize() {
  currentFontSize -= 2;
  productPage.style.fontSize = `${currentFontSize}px`;
}

function increaseFontSize() {
  currentFontSize += 2;
  productPage.style.fontSize = `${currentFontSize}px`;
}
