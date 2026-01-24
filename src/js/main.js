import ProductData from "./ProductDetails.mjs";
import ProductList from "./Productlist.mjs";

const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);

productList.init();
