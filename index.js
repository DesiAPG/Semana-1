const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/usuarios", (req, res) => {
  res.send("Metodo Post");
});

app.put("/usuarios", (req, res) => {
  res.send("Metodo Put");
});

app.delete("/usuarios", (req, res) => {
  res.send("Metodo Delete");
});

app.listen(4000, () => {
  console.log("Escuchando en el puerto 4000");
});
