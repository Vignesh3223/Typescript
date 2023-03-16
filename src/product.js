function getproducts() {
    return fetch('/product.json')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
getproducts()
    .then(function (product) {
    document.write("<h1><center>Product Details</center></h1>");
    document.write(product.map(function (p) { return 'Product ID : ' + p.Id + ' , ' + 'Product Name : ' + p.Name + ' , ' + 'Product Price: ' + p.Price + ' , ' + 'Product Quantity : ' + p.Quantity + '<br>'; }).toString());
});
