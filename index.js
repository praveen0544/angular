var express 	= require("express");
var app     	= express();
var path    	= require("path");

//Static File
app.use('/js', express.static(__dirname + '/node_modules')); 
app.use('/css', express.static(__dirname + '/node_modules')); 
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/views', express.static(__dirname + '/app/views'));
app.use('/images', express.static(__dirname + '/app/images'));
app.use('/config', express.static(__dirname + '/app/config'));

app.get( '/', function( req, res ){
  res.sendFile(path.join( __dirname+'/index.html'));
});

app.listen(3000);
console.log( "Running at Port 3000" );