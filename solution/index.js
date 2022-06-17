const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  calculateCartTotal();
  //?set item to LocalStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
});

//! capturing method:

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    let quantityP = event.target.nextElementSibling;
    if (quantityP.innerText > 1) {
      quantityP.innerText--;
      //? parameter == selected productInfoDiv
      calculateProductAndCartTotal(event.target.parentElement.parentElement);
    } else {
      if (confirm("Product will be deleted?")) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
      }
    }
  } else if (event.target.classList.contains("plus")) {
    event.target.previousElementSibling.innerText++;
    calculateProductAndCartTotal(event.target.parentElement.parentElement);
  } else if (event.target.classList.contains("remove-product")) {
    if (confirm("Product will be deleted")) {
      event.target.parentElement.parentElement.parentElement.remove();
      calculateCartTotal();
    }
    console.log("remove button clicked.");
  } else {
    console.log("other element clicked.");
  }
});

//! calculate cart and product totals:

const calculateProductAndCartTotal = (productInfoDiv) => {
  //? product calculation
  let price = productInfoDiv.querySelector("strong").innerText;
  let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
  let productTotalDiv = productInfoDiv.querySelector(".product-line-price");

  productTotalDiv.innerText = (price * quantity).toFixed(2);
  calculateCartTotal();
};

//! calculate cart totals:

const calculateCartTotal = () => {
  //? nodeList Div:
  let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");
  let subtotal = 0;
  productsTotalPriceDivs.forEach((eachProductTotalDiv) => {
    subtotal += parseFloat(eachProductTotalDiv.innerText);
  });

  console.log(subtotal);
  let taxPrice = subtotal * localStorage.getItem("taxRate");
  console.log(taxPrice);

  let shippingPrice =
    subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0;

  let cartTotal = subtotal + taxPrice + shippingPrice;
};
