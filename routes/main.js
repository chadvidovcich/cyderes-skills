const express = require("express")
const router = express.Router()
const homeController = require("../controllers/home")
const { checkQuery } = require('../middleware/checkQuery')

//Main Routes
router.get("/", homeController.forwardIndex)
router.get("/api/", homeController.getIndex)
router.get("/api/:searchQuery", checkQuery, homeController.getIPInfo)

module.exports = router