const path = require('path');

module.exports = (app) => {

    //HTML route = GET /notes will return the notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirName, '../public/notes.html'));

    });

    //HTML route = GET * returns the index.html file
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })

};