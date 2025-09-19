var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req,res)=>{
var aujd = new Date();
console.log(aujd.now);
var year = aujd.getFullYear();
res.json({date : year});
} 
);

module.exports = router;
