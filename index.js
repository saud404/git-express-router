const express = require("express");
const app = express();
var todos = [];
app.get("/api/todos", function (req, res) {
  res.json(todos);
});

app.post("/api/todos", function (req, res) {});

app.put("/api/todos/:id", function (req, res) {});

app.patch("/api/todos/:id", function (req, res) {});

app.delete("/api/todos/:id", function (req, res) {});

app.listen(3000, () => {
  console.log("Server Started at port 3000!");
});
