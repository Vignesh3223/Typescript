"use strict";
function getproducts() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
getproducts()
    .then(product => {
    document.write("<h1><center>Product Details</center></h1>");
    document.write(product.map(p => 'Product ID : ' + p.Id + ' , ' + 'Product Name : ' + p.Name + ' , ' + 'Product Price: ' + p.Price + ' , ' + 'Product Quantity : ' + p.Quantity + '<br>').toString());
});
