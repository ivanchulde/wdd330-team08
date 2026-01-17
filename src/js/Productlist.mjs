function productCardTemplate(product) {
    return `
        <li class="product-card">
            <a href="product_pages/?products=${product.Id}">
                <img src="${product.Image}" alt="${product.Name}">
                <h2>${product.Brand.Name}</h2>
                <h3>${product.Name}</h3>
                <p class="product-card__price">$${product.FinalPrice}</p>
            </a>
        </li>
        `;   
}

export default class Productlist {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.Productlist = Productlist;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(List);
    }

    renderList(list){
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}