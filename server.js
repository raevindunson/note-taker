const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//Got help from https://github.com/kara-krzystan/note-taker