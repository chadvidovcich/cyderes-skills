const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.js");

//Main Routes
router.get("/", homeController.getIndex);

module.exports = router;