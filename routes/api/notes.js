const router = require("express").Router();
const fs = require("fs");
const { readFromFile, readAndAppend, writeToFile } = require('../../helpers/fsUtils');
const path = require('path');

// GET Route
router.get("/", (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route
router.post("/", (req, res) => {
    const { title, text } = req.body;
    
    if (!title || !text) {
        return res.status(400).json({ error: 'Title and text are required' });
    }

    try {
        const newNote = {
            title,
            text,
            id: Math.random().toString(36).substr(2, 9)
        };

        readAndAppend(newNote, './db/db.json');
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error saving note:', error);
        res.status(500).json({ error: 'Failed to save note' });
    }
});

// DELETE Route
router.delete("/:id", (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((notes) => {
            const filteredNotes = notes.filter((note) => note.id !== noteId);
            writeToFile('./db/db.json', filteredNotes);
            res.json({ message: 'Note deleted successfully' });
        });
});

module.exports=router;