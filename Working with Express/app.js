const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

// Importing routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./util/path");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "page-not-found.html"));
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
