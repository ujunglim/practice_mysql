const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   req.user = {
//     id: "1234",
//   };
//   next();
// });

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log(req.user);
  res.sendFile(__dirname + "/home.html");
});

app.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("listening 3000");
});
