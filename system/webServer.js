var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// body parser  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  

var router = express.Router();

/* POST listing. */  
app.post('/login', function(req, res, next) {
  // console.log(req.param("password"));
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.password);
  if( (req.body.name=='zy') && (req.body.password=='zy')){
      res.send({"login":"success", "responseCode": "000000"});
  }
  else{
      res.send({"login":"fail"});
  }
  
});

app.use(express.static('./state-manage'));
//设置跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   // res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   // add_header 'Access-Control-Allow-Credentials' 'true';
//   next();
// });

router.get('/',function(req, res, next){
  req.url = 'index.html';
  next();
});
app.use(router);

module.exports = app.listen(8080, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + 8080;
    console.log('Listening at ' + uri + '\n');
});