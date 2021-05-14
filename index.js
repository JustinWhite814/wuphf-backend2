const express = require("express");
const methodOverride = require("method-override");
const cors = require('cors')
const userRouter = require("./controllers/userRouter");
const postRouter = require("./controllers/postRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors())

const port = 4000;

app.get("/", (req, res) => {
  // Can also change just a sample size for the route
  res.send("You're Home");
});

// We can discuss what we want on each route and where it should go
app.use("/users/", userRouter);
app.use("/posts/", postRouter);

app.listen(port, () => {
  console.log(`Project 3 HOSTED on port ${port}`);
});
