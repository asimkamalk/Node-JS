const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

// Importing routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
