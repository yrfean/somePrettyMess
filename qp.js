import express from "express";

const app = express();

app.use(express.json());

// app.get("/products/:id", (req, res) => {
//   const para = req.params;
//   console.log(para);
// });

app.get("/products", (req, res) => {
  const queryShows = req.query.shows;
  const querySlang = req.query.language;
  console.log(queryShows, querySlang);
});

app.listen(3006);
