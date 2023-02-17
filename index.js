const express = require("express");
const app = express();
const bodyparser = require('body-parser')

const aboutRouter =require("./Routs/about")
const userRouter = require("./Routs/users")
const authnav = require("./Routs/auth")

// const dotenv = require('dotenv')
// dotenv.config('./.env')
require('dotenv/config')


const port = process.env.port

app.use(bodyparser.json());



app.use("/api", authnav)







app.get("/", (req, res) => {
  res.send(`Running on port ${port}`);
});

app.use("/about", aboutRouter)

app.use("/users", userRouter)

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});





