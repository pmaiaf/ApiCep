const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const router = express.Router();


const app = express();

router.get('/',(req,res) =>{
    res.render('index.html')
})


module.exports = router