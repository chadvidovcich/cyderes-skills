let express = require("express")
let app = express()

//Import routes
const mainRoutes = require("./routes/main.js");

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Server Routes
app.use("/",mainRoutes)

//Express Server for Development
if (process.env.NODE_ENV === "DEV") {
  //Use .env file
  require("dotenv").config({ path: "./.env" });

  //Local Server Start
  app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
  });
}

exports.cyderes_api = app
