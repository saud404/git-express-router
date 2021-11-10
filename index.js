//const { json } = require("express");
const express = require("express");
const app = express();

const todoRoutes = require("./todo.route");
//const userRoutes = require("./router/user.route");

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

app.use("/api/todos", todoRoutes);
app.listen(3000, () => {
  console.log("Server Started at port 3000!");
});
