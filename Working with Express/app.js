const express = require("express");
const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  console.log("I am in a middleware");
  next(); //Allow the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("Another middleware");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
