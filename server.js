var express = require('express');  
var path = require('path')
var app = express()

 app.set('view engine' , 'ejs')


app.get('/', function (req,res,next) {  
  res.render('hmamou',{firstname:'anouar' , lastname:'hmmamou'})
})

var server = app.listen(8000, function () {  
 console.log("the hacker now")
})  