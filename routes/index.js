var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req,res)=>{
let year = new Date().getFullYear().toString();
res.json({year : year});
} 
);

module.exports = router;
