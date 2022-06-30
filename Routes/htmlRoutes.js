const path = require("path");

module.exports = function(app) {
    
    //Sends notes to the index.html file
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });
    
    //Routes notes to notes.html 
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });


}

