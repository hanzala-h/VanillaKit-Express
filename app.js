const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();

const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3000;

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'manifest.json'), 'utf8'));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { cssFile: manifest["main.css"] });
})

app.listen(PORT, () => { console.log(`Server started at ${HOST}:${PORT}`); });
