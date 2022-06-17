const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  calculateCartTotal();
  //?set item to LocalStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
});
