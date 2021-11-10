const { json } = require("express");
const express = require("express");
const app = express();
app.use(express.json()); //application/json
//app.use(experss.urlencoded()); //x-www-form-urlencoded
// app.use(function body(req, res, next) {
//   //req.on('data', function(data) {
//   if (req.method != "GET") {
//     var body;
//     req.on("data", function (data) {
//       req.body = JSON.parse(data.toString());
//       console.log(data.toString());
//       next();
//     });
//   } else {
//     next();
//   }
// });

var todos = [];

function getNextId() {
  return todos.length == 0 ? 1 : todos[todos.length - 1].id + 1;
}
app.get("/api/todos", function (req, res) {
  res.json(todos);
});

app.post("/api/todos", function (req, res) {
  var todo = { ...req.body, id: getNextId() };
  todos.push(todo);
  res.send(todo);
});

app.put("/api/todos/:id", function (req, res) {
  var { id } = req.params;
  var updatedObj = req.body;
  var idx = todos.findIndex((todo) => todo.id == id);
  // console.log(updatedObj, id);
  if (idx != -1) {
    todos[idx] = { ...updatedObj, id: id };
    res.send({ ...updatedObj, id: id });
  }
  return json({
    msg: "Todo with the specified ID does not exist.",
  });
});

app.patch("/api/todos/:id", function (req, res) {
  var { id } = req.params;
  var updatedObj = req.body;
  var idx = todos.findIndex((todo) => todo.id == id);
  if (idx != -1) {
    todos[idx] = { ...todos[idx], ...updatedObj, id: id };
    res.send({ ...updatedObj, id: id });
  }
  return json({
    msg: "Todo with the specified ID does not exist.",
  });
});

app.delete("/api/todos/:id", function (req, res) {
  var { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.json(todos);
});

app.listen(3000, () => {
  console.log("Server Started at port 3000!");
});
