const express = require("express");
const router = express.Router();


router.get("/", (req,res)=>{
    res.send("this is a about page")
})


module.exports = router