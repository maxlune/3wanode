const express = require("express");

const app = express();

app((res, req, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATH, OPTIONS"
  );
  next();
});

// app.use((req, res) => {
//   res.json({ messagge: 'Une bien belle requête !' });
// })

// app.use((req, res, next) => {
//   console.log("test");
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ messagge: "Une bien belle requête !" });
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
// });

// Requête GET avec route
app.get("/data/movies", (req, res, next) => {
  const movies = [
    {
      id: "1",
      title: "Alien",
      real: "Ridley Scott",
    },
    {
      id: "2",
      title: "Blade Runner",
      real: "Ridley Scott",
    },
  ];
});

// Requête POST avec route
app.post("data/form", (req, res, next) => {
  console.log(req.body);
  res.status(201);
});

module.exports = app;
