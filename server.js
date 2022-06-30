//dependencies
const express = require("express");
const fs = require("fs");

//Express app set-up
var app = express()
var PORT = process.env.PORT ||3001

//Instructs Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use (express.json());
app.use("/assets", express.static("./assets"));

require("./Routes/htmlRoutes")(app);
require("./Routes/apiRoutes")(app);

//LAUNCH!
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});