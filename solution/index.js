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
