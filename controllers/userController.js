import modelling from "../schemas/userSchema.js";

const fun = (req, res) => {
  const { email, password, age, number } = req.body;
  const user = new modelling({ email, password, age, number });
  const saved =  user.save();
  console.log(saved);
  res.send("user created");
};

export default fun;
