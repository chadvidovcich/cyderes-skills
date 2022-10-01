const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.js");

//Main Routes
router.get("/", homeController.forwardIndex);
router.get("/api/", homeController.getIndex);
router.get("/api/:searchQuery", homeController.getIPInfo);

module.exports = router;