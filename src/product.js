function getproducts() {
    return fetch('/product.json')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
getproducts()
    .then(function (product) {
    document.write(product.map(function (p) { return 'Product ID : ' + p.Id + '\n'; }).toString());
    document.write(product.map(function (p) { return 'Product Name : ' + p.Name + '\n'; }).toString());
    document.write(product.map(function (p) { return 'Product Price: ' + p.Price + '\n'; }).toString());
    document.write(product.map(function (p) { return 'Product Quantity : ' + p.Quantity + '\n'; }).toString());
});
