import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getParam } from "./utils.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const cartItems = getLocalStorage("so-cart") || []; // get cart array of items from local storage if null set to empty array
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

function displayDiscount() {
    
    const originalPriceElement = document.querySelector('.product-card__price');
    const salePriceElement = document.querySelector('.product-discount__price');
    const badgeElement = document.querySelector('.discount-badge');

    const originalPrice = parseFloat(originalPriceElement.textContent.replace('$', ''));
    const salePrice = parseFloat(salePriceElement.textContent.replace('$', ''));

    if (salePrice < originalPrice) {
        const discountAmount = originalPrice - salePrice;
        const discountPercentage = Math.round((discountAmount / originalPrice) * 100); // Calculate percentage

    badgeElement.textContent = `SAVE ${discountPercentage}%`;

    originalPriceElement.classList.add('strikethrough');

    } else {
        
        badgeElement.style.display = 'none';
    }
  }

  document.addEventListener('DOMContentLoaded', displayDiscount);
