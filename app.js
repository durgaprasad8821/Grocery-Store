import products from './data.js' 

function productsCards(product){

const cardHome = document.getElementById("product-card");
let data = ""
product.forEach((value) =>(
    data +=`
        <div class="product-card">
        <img src=${value.imgUrl} alt="Milk">
        <h3>${value.name}</h3>
        <p>$ ${value.price}</p>
        <button>Add to Cart</button>
      </div>
    `

    
));
cardHome.innerHTML = data;

}


window.filterData = (option) =>{
    const cardItems = products.filter(value => value.category === option);
    productsCards(cardItems);
}




productsCards(products)