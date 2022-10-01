const express = require("express")
const app = express()

// Import routes
const mainRoutes = require("./routes/main.js")

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Server Routes
app.use("/",mainRoutes)

// Express LocalServer for Development
if (process.env.NODE_ENV === "DEV" || "TEST") {
  // Use .env file
  require("dotenv").config({ path: "./.env" })

  // Local Server Start
  app.listen(process.env.PORT || 8000, () => {
      console.log(`Local Server is running at http://localhost:${process.env.PORT}`)
  });

  module.exports = app
}

exports.cyderes_api = app
