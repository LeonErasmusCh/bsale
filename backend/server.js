const express = require("express");
var cors = require('cors');
const category = require("./category");
const products = require("./prouducts")

const port = 3000;
const app = express();
app.use(cors());



// query string search by category http://localhost:3000/products
// query string search by category http://localhost:3000/products?id=1
// query string search by category http://localhost:3000/products?category=1

app.get("/products", (req, res, next) => {
 const filters = req.query;
 const filteredProducts = products.filter(product => {
    let isValid = true;
    for (key in filters){
      console.log(key, product[key], filters[key]);
      isValid = isValid && product[key] == filters[key]
    }
    return isValid
 });
 res.send(filteredProducts)

});



app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});


// node server.js