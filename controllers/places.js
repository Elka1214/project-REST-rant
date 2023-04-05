const router = require("express").Router();
const db = require("../models");
// const places = require('../models/places')

// Places index page
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      res.status(404).render("error404");
    });
});

module.exports = router;
