const path = require('path');
const fs = require('fs')

//npm package for unique ids
var uniqid = require('uniqid');

module.exports = (app) => {

    //GET /api/notes to read json file
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    //POST /api/notes add new note to db.json file
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };
        //push created note to write in db.json file
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    //DELETE will receive a query parameter with id of a note to delete
    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'))
        
        let deleteNotes = db.filter(item => item.id !== req.params.id);

        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
    }) 
};