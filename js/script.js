let allProducts;
document.addEventListener('DOMContentLoaded', () => {

    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then((response) => response.json())

        .then((data) => {
            console.log(data.categories, 'all product');
            allProducts = data.categories.reduce((acc, category) => acc.concat(category.category_products), []);
            displayAllProducts();
            console.log(allProducts);

            // Pass data to the showProducts function
            document.getElementById('Men').addEventListener('click', () => showProducts('Men', data));
            document.getElementById('Women').addEventListener('click', () => showProducts('Women', data));
            document.getElementById('Kids').addEventListener('click', () => showProducts('Kids', data));
        });
});

function displayAllProducts() {
    let productHTML = "";

    allProducts.forEach((value) => {
        productHTML += `
        <div class="col-3 col-ll-4 col-lp-6 col-ml-12">
        <div class="box">
            <div class="img">
                <img src=${value.image} alt=${value.id} width="100%" height='400px'/>
            </div>
            <div class="info">
                <p class="name">${value.title} .</p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p>${value.vendor
                }</p>
            </div>
            <div class="price">
                <p>${value.price} <del>${value.compare_at_price}
                </del></p>
                <p class="off">50% Off</p>
            </div>
            <button>Add to cart</button>
        </div>
    </div>
    `;
    });
    document.querySelector('.wrap-3 .row').innerHTML = productHTML;
}

function showProducts(category, data) {
    // console.log(category,data);
    
    let categoryProducts = allProducts.filter((product) => {

        return data.categories.some((cat) => 
            cat.category_name.toLowerCase() === category.toLowerCase() && cat.category_products.some(p => p.id === product.id)
        );
    });

    let productHTML = "";
    categoryProducts.forEach((value) => {
        productHTML +=`
        <div class="col-3 col-ll-4 col-lp-6 col-ml-12">
        <div class="box">
            <div class="img">
                <img src=${value.image} alt=${value.id} width="100%" height='400px'/>
            </div>
            <div class="info">
                <p class="name">${value.title} .</p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p>${value.vendor
                }</p>
            </div>
            <div class="price">
                <p>${value.price} <del>${value.compare_at_price}
                </del></p>
                <p class="off">50% Off</p>
            </div>
            <button>Add to cart</button>
        </div>
    </div>
    `;
    });
    document.querySelector('.wrap-3 .row').innerHTML = productHTML;
}


