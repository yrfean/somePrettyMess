import express from "express";

const app = express();

app.use(express.json());

let home = {
  name: "irfans home",
  location: "muthalam",
};

// app.put("/home", (req, res) => {
//   const updatedHome = req.body;
//   if (updatedHome.name && updatedHome.location) {
//     home.name = updatedHome.name;
//     home.location = updatedHome.location;
//     res.send(home)

//   } else {
//     res.status(404);
//   }
// });

// app.delete("/home", (req, res) => {
//   home = null;
//   res.status(200).send("successsfull");
// });

app.delete("/home", (req, res) => {
  if (home) {
    home = null; // Simulating deletion of the "home"
    res.status(200).send("Successfully deleted the home");
  } else {
    res.status(404).send("Home not found");
  }
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});


