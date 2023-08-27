const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');
const router = require('express').Router();
let myNotes = db;

router.get('/notes', (req, res) => {
    let allNotes = (db.map((note, index) => ({
        ...note, 
        id: index
    }))); 
    req.json(allNotes);
});

router.post('/notes', (req, res) => {
    db.push(req.body);
    fs.writeFileSync(path.resolves(__dirname, "../db/db.json"), JSON.stringify(db));
    res.json(db);
});



module.exports = router;