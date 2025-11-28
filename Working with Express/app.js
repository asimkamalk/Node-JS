const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("I am in a middleware");
//   next(); //Allow the request to continue to the next middleware in line
// });

app.use("/add-product", (req, res, next) => {
  //   console.log("Another middleware");
  res.send(
    '<form action="/product" method= "POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("Another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
