const express = require("express");
const router = express.Router();

const users = [
  {
    fstname: "reetam",
    sndname: "roy",
  }
  
];

router.get("/", (req, res) => {
    console.log(users);

    console.log(req.body);

    res.send("this is user page");
});

router.post("/post",(req,res)=>{
    console.log("post done");

    console.log(req.fstname);

    res.send("post ")
})

module.exports = router;
