require("dotenv").config()
const express = require("express");
const path = require("path")
const app = express();

const port = process.env.PORT
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.listen(port, () => {
    console.log(("Escuchando en puerto."))
})