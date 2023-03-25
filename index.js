require("dotenv").config();
const express = require("express");
const app = express();

//MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("views engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Import Controllers
app.use("/places", require("./controllers/places"));

//HOME PAGE
app.get("/", (req, res) => {
  res.send("Hello World...");
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
