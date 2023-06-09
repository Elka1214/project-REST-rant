require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

//MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("views engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Import Controllers
app.use("/places", require("./controllers/places"));

//HOME PAGE
app.get("/", (req, res) => {
  res.render("home");
});

//WILDCARD ROUTE
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
  res.status(404).render("error404");
});

//SERVER LISTENER
app.listen(process.env.PORT, () => {
  console.log(`Rest-Rant Server Running...`);
});
