const router = require('express').Router

router.post("/",(req,res)=>{
    res.send("registerd");
});

module.exports = router;