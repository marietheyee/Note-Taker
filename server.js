//create const "requires"
const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('notes');


//middleware
const app = express();
const PORT = process.env.PORT || 3001;

//data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//function to read data and append some content
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

//GET route for retrieving Notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then ((data) => res.json(JSON.parse(data)));
});

//POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    console.log(req.body);
    
    const { note_title, text } = req.body;
    if (req.body) {
        const newNote = {
            note_title,
            text,
        };

        readAndAppend(newNote, './db/db/json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
})


//listener
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);