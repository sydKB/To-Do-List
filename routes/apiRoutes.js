const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');
const api = require('express').Router();

// GET request for all existing notes
api.get('/notes', (req, res) => {
  let allNotes = (db.map((note, index) => ({
    ...note, 
    id: index
  }))); 
  res.json(allNotes);
});

// POST request to add new notes to the display/database
api.post('/notes', (req, res) => {
  db.push(req.body);
  fs.writeFileSync(path.resolve(__dirname, "../db/db.json"), JSON.stringify(db));
  res.json(db);
});

// DELETE request to remove notes from display/database
api.delete('/notes/:id', (req, res) => {
  db.splice(req.params.id, 1);   
  fs.writeFileSync(path.resolve(__dirname, "../db/db.json"), JSON.stringify(db));
  console.log(deleteNotes); 
});

module.exports = api;